const Boleto = require('../../../index').Boleto

const expect = require('chai').expect

describe('Itau Boleto', () => {
  describe('when creating a valid boleto', () => {
    let boleto
    before(() => {
      boleto = new Boleto({
        'banco': 'itau',
        'data_emissao': new Date('2017-01-01T00:00:00Z'),
        'data_vencimento': new Date(2017, 0, 5),
        'valor': 1500,
        'nosso_numero': '6',
        'numero_documento': '1',
        'cedente': 'VITALCRED MEIOS DE PAGAMENTO S/A',
        'cedente_cnpj': '08022117000188',
        'agencia': '0710',
        'codigo_cedente': '51364', //Conta Corrente da conta Itau
        'carteira': '109',
        'pagador_nome': 'Nome do pagador',
        'pagador_documento':'0000000000',
        'pagador_logradouro_numero': 'Rua Henrique Dummont, 321',
        'pagador_cidade_estado_cep': 'Ribeirão Preto-SP-14085330',
        'local_de_pagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
        'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.'
      })
    })

    it('contains correct bank options', () => {
      expect(boleto.bank.options).to.have.property('logoURL').that.contains('banco_itau_logo.jpg')
      expect(boleto.bank.options).to.have.property('codigo', '341')
    })

    it('contains correct codigo_banco', () => {
      expect(boleto.codigo_banco).to.equal('341-7')
    })

    it('contains correct barcode_data', () => {
      expect(boleto.barcode_data).to.equal('34192703000000015001090000000630710513649000')
    })

    it('contains correct linha_digitavel', () => {
      expect(boleto.linha_digitavel).to.equal('34191.09008 00000.630715 05136.490009 2 70300000001500')
    })
  })
})
