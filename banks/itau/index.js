var formatters = require('../../lib/formatters')
  //ediHelper = require('../../lib/edi-helper'),
  //helper = require('./helper');
  
exports.options = {
  logoURL: 'https://s3.amazonaws.com/mailer.pagpop.com.br/img_ti/banco_itau_logo.jpg',
  codigo: '341'
};

//Gera o digito do Codigo de Barras - Anexo 2 da documentacao CNAB400
exports.dvBarra = function (barra) {
  var resto2 = formatters.mod11(barra, 9, 1); //Aqui o resto = 1 é para retornar (soma % 11)
  resto2 = 11 - resto2;
  return (resto2 == 0 || resto2 == 1 || resto2 == 10 || resto2 == 11) ? 1 : resto2;
};

exports.barcodeData = function (boleto) {
  var codigoBanco = this.options.codigo;
  var numMoeda = "9";
  var fatorVencimento = formatters.fatorVencimento(boleto['data_vencimento']);
  var agencia = formatters.addTrailingZeros(boleto['agencia'], 4);
  var conta = formatters.addTrailingZeros(boleto['codigo_cedente'], 5);
  var valor = formatters.addTrailingZeros(boleto['valor'], 10);
  var carteira = boleto['carteira'];
  var nossoNumero = formatters.addTrailingZeros(boleto['nosso_numero'], 8);
  var barra = codigoBanco + numMoeda + fatorVencimento + valor + carteira + nossoNumero + formatters.mod10(agencia + conta + carteira + nossoNumero) + agencia + conta + formatters.mod10(agencia + conta) + '000';
  var dvBarra = this.dvBarra(barra);
  var lineData = barra.substring(0, 4) + dvBarra + barra.substring(4, barra.length);
  boleto['codigo_cedente'] = [conta, '-', formatters.mod10([agencia, conta].join(''))].join('');
  boleto['nosso_numero'] = carteira + '/' + nossoNumero;
  boleto['nosso_numero_dv'] = formatters.mod10([agencia, conta, carteira, nossoNumero].join(''));
  
  return lineData;
};
exports.linhaDigitavel = function (barcodeData) {
  //Conteudo de barcodeData, segundo CNAB400 do Itau
  // 01-03    -> Código do banco sem o digito
  // 04-04    -> Código da Moeda (9-Real)
  // 05-05    -> Dígito verificador do código de barras
  // 06-09    -> Fator de vencimento
  // 10-19    -> Valor Nominal do Título
  // 20-22    -> carteira
  // 23-30    -> nosso numero
  // 31-31    -> DAC (Agencia/Conta/Carteira/Nosso Numero)
  // 32 a 35  -> Numero Agencia Beneficiario
  // 36 a 40  -> Numero da Conta corrente
  // 41 a 41  -> DAC (Agencia/Conta Corrente)
  // 42 a 44  -> Zeros

  var campos = [];
  
  var campo = barcodeData.substr(0, 3) + barcodeData.substr(3, 1) + barcodeData.substr(19, 3) + barcodeData.substr(22, 2);
  campo = campo + formatters.mod10(campo);
  campo = campo.substr(0, 5) + '.' + campo.substr(5);
  campos.push(campo);
  
  campo = barcodeData.substr(24, 6) + barcodeData.substr(30, 1) + barcodeData.substr(31, 3);
  campo = campo + formatters.mod10(campo);
  campo = campo.substr(0, 5) + '.' + campo.substr(5);
  campos.push(campo);
  
  campo = barcodeData.substr(34, 1) + barcodeData.substr(35, 6) + barcodeData.substr(41, 3);
  campo = campo + formatters.mod10(campo);
  campo = campo.substr(0, 5) + '.' + campo.substr(5);
  campos.push(campo);
  
  campo = barcodeData.substr(4, 1);
  campos.push(campo);
  
  campo = barcodeData.substr(5, 4) + barcodeData.substr(9, 10);
  campos.push(campo);
  
  return campos.join(" ");
};

exports.parseEDIFile = function (fileContent) {
  console.log('Not implemented'); 
};