var valorEmDolarTexto = prompt("Qual valor em dolar voce quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorPtaxDolarTexto = prompt("Qual valor da Ptax?")
var valorPtaxDolarNumero = parseFloat(valorPtaxDolarTexto)

var valorReal = valorEmDolarNumero * valorPtaxDolarNumero
var valorRealFixado = valorReal.toFixed(2)

alert(valorRealFixado)

//calculo com PTAX.

//Revisão
//variaveis var int - float - string
//alert - parseint - parseFloat - prompt
//operações + somar * multiplicar