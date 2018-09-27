module.exports = (bankLogo, bankNumber, linhaDigitavel, barcode, bmpBarcode) => `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Visualização de boleto</title>
      <meta name="robots" content="noindex">
      <meta name="format-detection" content="telephone=no"/>
      <meta charset="utf-8"/>
      <style media="screen, print" type="text/css">
      body
      {
        color:#000000;
        background-color:#ffffff;
        margin-top:0;
        margin-right:0;
      }

      *{margin:0px;padding:0px}
      table{border:0;border-collapse:collapse;padding:0}

      img{border:0}

      .cp
      {
        font: bold 10px arial;
        color: black
      }
      .ti
      {
        font: 9px arial, helvetica, sans-serif
      }
      .ld
      {
        font: bold 15px arial;
        color: #000000
      }
      .ct
      {
        font: 9px "arial narrow";
        color: #000033
      }
      .cn
      {
        font: 9px arial;
        color: black
      }
      .bc
      {
        font: bold 22px arial;
        color: #000000
      }

      .cut{width:665px;height:1px;border-top:dashed 1px #000}
      .Ac{text-align:center}
      .Ar{text-align:right}
      .Al{text-align:left}
      .At{vertical-align:top}
      .Ab{vertical-align:bottom}
      .ct td, .cp td{padding-left:6px;border-left:solid 1px #000}
      .cpN{font:bold 10px arial;color:black}
      .ctN{font:9px "arial narrow";color:#000033}
      .pL0{padding-left:0px}
      .pL6{padding-left:6px}
      .pL10{padding-left:10px}
      .imgLogo{width:150px}
      .imgLogo img{width:150px;height:40px}
      .barra{width:2px;height:15px;;background-color:#000;}
      .rBb td{border-bottom:solid 1px #000}
      .BB{border-bottom:solid 1px #000}
      .BL{border-left:solid 1px #000}
      .BR{border-right:solid 1px #000}
      .BT1{border-top:dashed 1px #000}
      .BT2{border-top:solid 2px #000}
      .h1{height:1px}
      .h13{height:13px}
      .h12{height:12px}
      .h13 td{vertical-align:top}
      .h12 td{vertical-align:top}
      .w6{width:6px}
      .w7{width:7px;}
      .w34{width:34px}
      .w45{width:45px}
      .w53{width:53px}
      .w62{width:62px}
      .w65{width:65px}
      .w72{width:72px}
      .w83{width:83px}
      .w88{width:88px}
      .w104{width:104px}
      .w105{width:105px}
      .w106{width:106px}
      .w113{width:113px}
      .w112{width:112px}
      .w123{width:123px}
      .w126{width:126px}
      .w128{width:128px}
      .w132{width:132px}
      .w134{width:134px}
      .w150{width:150px}
      .w163{width:163px}
      .w164{width:164px}
      .w180{width:180px}
      .w182{width:182px}
      .w186{width:186px}
      .w192{width:192px}
      .w250{width:250px}
      .w298{width:298px}
      .w409{width:409px}
      .w472{width:472px}
      .w478{width:478px}
      .w500{width:500px}
      .w544{width:544px}
      .w564{width:564px}
      .w659{width:659px}
      .w666{width:666px}
      .w667{width:667px}
      .BHead td{border-bottom:solid 2px #000}
      .EcdBar{height:50px;vertical-align:bottom}
      .rc6 td{vertical-align:top;border-bottom:solid 1px #000;border-left:solid 1px #000}
      .rc6 div{padding-left:6px}
      .rc6 .t{font:9px "arial narrow";color:#000033;height:13px}
      .rc6 .c{font:bold 10px arial;color:black;height:12px}
      .mt23{margin-top:23px;}
      .pb4{padding-bottom:14px;}
      .ebc{width:4px;height:440px;border-right:dotted 1px #000000;margin-right:4px;}

      .barcode {
        ${bmpBarcode}
        height: 50px;
      }

      ${bmpBarcode ? '' : `.barcode-line {
        height: inherit;
        display: inline-block;
        float: left;
      }`}

      @media print
      {
        * {-webkit-print-color-adjust:exact;}
        .no-print, .no-print *
        {
          display: none !important;
        }
      }
      </style>
    </head>
    <body>
      <div>
      <table class="w666">
            <tr class="cpN">
                <td class="At Ac">Instruções de Impressão</td>
            </tr>
            <tr class="ti">
                <td class="At Ac">Imprimir em impressora jato de tinta (ink jet) ou laser em qualidade normal. (Não use modo econômico).<br>Utilize folha A4 (210 x 297 mm) ou Carta (216 x 279 mm) - Corte na linha indicada<br></td>
            </tr>
            <tr class="ti">
                <td class="At Ac">
            <br/>
            <form>
              <input class="no-print" type="button" value="Clique aqui para imprimir" onclick="window.print();return false;" />
            </form>
          </td>
            </tr>
        </table><br /><table class="w666">
            <tr>
                <td class="ctN cut" />
            </tr>
            <tr>
                <td class="cpN Ar">Recibo do Pagador</td>
            </tr>
        </table><br /><table class="w666">
            <tr class="BHead">
          <td class="imgLogo Al"><img src="${bankLogo}" /></td>
                <td class="barra"></td>
          <td class="w72 Ab bc Ac">${bankNumber}</td>
                <td class="barra"></td>
          <td class="w500 Ac ld" id="linha-digitavel-1">${linhaDigitavel}</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13 At">
                <td class="w298">Beneficiário</td>
                <td class="w126">Agência / Código do Beneficiário</td>
                <td class="w34">Espécie</td>
                <td class="w45">Quantidade</td>
                <td class="w128">Carteira / Nosso número</td>
            </tr>
            <tr class="cp h12 At rBb">
          <td>Pagar.me Pagamentos S/A</td>
          <td>1229/469</td>
                <td>R$</td>
                <td></td>
          <td class="Ar">000000000006-0</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w192">Número do documento</td>
                <td class="w132">CPF/CNPJ</td>
                <td class="w134">Vencimento</td>
                <td class="w180">Valor documento</td>
            </tr>
            <tr class="cp h12 rBb">
          <td>000000001</td>
          <td>18727053000174</td>
          <td>05/01/2017</td>
          <td class="Ar">R$ 15,00</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w113">(-) Desconto / Abatimentos</td>
                <td class="w112">(-) Outras deduções</td>
                <td class="w113">(+) Mora / Multa</td>
                <td class="w113">(+) Outros acréscimos</td>
                <td class="w180">(=) Valor cobrado</td>
            </tr>
            <tr class="cp h12 rBb Ab">
                <td>R$ 0,00</td>
                <td></td>
                <td>R$ 0,00</td>
                <td></td>
                <td class="Ar">&nbsp;R$ 15,00</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w659">Pagador</td>
            </tr>
            <tr class="cp h12">
                <td>Nome do pagador - CNPJ/CPF: 0000000000</br>Rua Henrique Dummont, 2123</br>Ribeirão Preto-SP-14022355</td>
            </tr>
            <tr class="cp h12 rBb">
                <td></td>
            </tr>
        </table><table class="w666">
            <tr class="ctN h13">
                <td class="pL6">Instruções</td>
                <td class="w180 Ar">Autenticação mecânica</td>
            </tr>
            <tr class="cpN h12">
                <td class="pL6">Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.&lt;script&gt;alert(1)&lt;/script&gt;</td>
                <td class="pL6 Ar"></td>
            </tr>
        </table><table class="ctN w666">
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
            <tr><td class="Ar">Corte na linha pontilhada</td></tr>
            <tr><td class="cut" /></tr>
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
        </table><table class="w666">
            <tr class="BHead">
          <td class="imgLogo Al"><img src="${bankLogo}" /></td>
                <td class="barra"></td>
          <td class="w72 Ab bc Ac">${bankNumber}</td>
                <td class="barra"></td>
          <td class="w500 Ac ld" id="linha-digitavel-2">${linhaDigitavel}</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w472">Local de pagamento</td>
                <td class="w180">Vencimento</td>
            </tr>
            <tr class="cp h12 rBb">
          <td>PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.</td>
          <td class="Ar">05/01/2017</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w472">Beneficiário</td>
                <td class="w180">Agência / Código beneficiário</td>
            </tr>
            <tr class="cp h12 rBb">
          <td>Pagar.me Pagamentos S/A - CNPJ: 08.022.117/0001-88</td>
          <td class="Ar">1229/469</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w113">Data do documento</td>
                <td class="w163">N<u>o</u> documento</td>
                <td class="w62">Espécie doc.</td>
                <td class="w34">Aceite</td>
                <td class="w72">Data processamento</td>
                <td class="w180">Carteira / Nosso número</td>
            </tr>
            <tr class="cp h12 rBb">
          <td>01/01/2017</td>
          <td>000000001</td>
                <td>DM</td>
                <td>N</td>
          <td>01/01/2017</td>
          <td class="Ar">000000000006-0</td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w113">Uso do banco</td>
                <td class="w83">Carteira</td>
                <td class="w53">Espécie</td>
                <td class="w123">Quantidade</td>
                <td class="w72">(x) Valor</td>
                <td class="w180">(=) Valor documento</td>
            </tr>
            <tr class="cp h12 rBb">
                <td>&nbsp;</td>
          <td class="Al">25</td>
                <td class="Al">R$</td>
                <td></td>
                <td></td>
          <td class="Ar">R$ 15,00</td>
            </tr>
        </table><table class="w666">
            <tr class="rc6">
                <td class="w478">
                    <div class="ctN pL10">Instruções (Texto de responsabilidade do beneficiário)</div>
            <div class="cpN pL10">Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.&lt;script&gt;alert(1)&lt;/script&gt;</br></div>
                </td>
                <td class="w186">
                    <div class="t">(-) Desconto / Abatimentos</div>
                    <div class="c BB"></div>
                    <div class="t">(-) Outras deduções</div>
                    <div class="c BB"></div>
                    <div class="t">(+) Mora / Multa</div>
                    <div class="c BB"></div>
                    <div class="t">(+) Outros acréscimos</div>
                    <div class="c BB"></div>
                    <div class="t">(=) Valor cobrado</div>
                    <div class="c"></div>
                </td>
            </tr>
        </table><table class="w666">
            <tr class="ct h13">
                <td class="w659">Pagador</td>
            </tr>
            <tr class="cp h12">
            <td class="At">Nome do pagador - CNPJ/CPF: 0000000000</br>Rua Henrique Dummont, 2123</br>Ribeirão Preto-SP-14022355</td>
            </tr>
        </table><table class="w666">
            <tr class="rBb">
                <td class="w478 BL">
                    <div class="cpN pL6"></div>
                </td>
                <td class="Ab BL">
                    <div class="ctN pL6">Cód. baixa</div>
                </td>
            </tr>
        </table><table class="w666 ctN">
            <tr>
                <td class="pL6  w409">Sacador / Avalista</td>
                <td class="w250 Ar">Autenticação mecânica - <b class="cpN">Ficha de Compensação</b></td>
            </tr>
            <tr class="h13"><td colspan="3" /></tr>
        </table><table class="w666">
            <tr>
          <td class="EcdBar Al pL10">

            ${barcode ? `<div class="barcode"> ${barcode}</div>` : '<div class="barcode"/>'}

          </td>
            </tr>
        </table><table class="ctN w666">
            <tr class="h13"><td /></tr>
            <tr><td class="Ar">Corte na linha pontilhada</td></tr>
            <tr><td class="cut" /></tr>
        </table>
        <table class="ctN w666">
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
            <tr class="h13"><td /></tr>
        </table>
    </div>
      <script>
        (function () {
          var onLoadDocumentElement
          var onLoadDocumentCopy

          onDOMReady(function () {
            onLoadDocumentCopy = document.body.children[0].outerHTML
            onLoadDocumentElement = hashString(onLoadDocumentCopy);

            onDOMChange(function () {
              document.body.innerHTML = onLoadDocumentCopy;
            })
          })

          function onDOMReady(callback) {
            if (document.readyState === 'complete') return callback();

            setTimeout(function () {
              onDOMReady(callback);
            }, 5);
          }

          function onDOMChange (callback) {
            var childContent = document.body.children[0];

            if (childContent) {
              var currentDocumentElement = hashString(childContent.outerHTML);

              if (onLoadDocumentElement !== currentDocumentElement) {
                callback();
              }
            } else {
              callback();
            }

            setTimeout(function () {
              onDOMChange(callback);
            }, 150);
          }

          function hashString (value) {
            var hash = 0;

            if (value.length === 0) return hash;

            for (i = 0; i < value.length; i++) {
              char = value.charCodeAt(i);
              hash = ((hash<<5)-hash)+char;
              hash = hash & hash // Convert to 32bit integer
            }

            return hash;
          }
        })()
      </script>
    </body>
    </html>
`
