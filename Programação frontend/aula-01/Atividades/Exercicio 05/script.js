var capital =prompt("Digite o valor do capital investido:");
var taxa =prompt("Digite o valor da taxa de juros:");
var tempo =prompt("Quantos meses:");

var montante = (capital * (1 + (taxa/100)) ** tempo)

alert("O montante será de R$ " +montante.toFixed(2));
