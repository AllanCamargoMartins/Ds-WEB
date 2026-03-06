/* -------- PRÁTICA DE VALIDAÇÃO SIMPLES -------- */

document.getElementById("formulario").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let confirmaSenha = document.getElementById("confirma-senha").value;
let cpf = document.getElementById("cpf").value;
let telefone = document.getElementById("telefone").value;
let cep = document.getElementById("cep").value;
let data = document.getElementById("data-nascimento").value;
let valor = document.getElementById("valor").value;
let url = document.getElementById("url").value;
let cartao = document.getElementById("cartao").value;

let erro = false;
let errosLista = [];

function mostrarErro(id,msg){
document.getElementById(id).innerText = msg;

let campo = id.replace("erro-","");
errosLista.push(campo + " inválido");

erro = true;
}

function limparErro(id){
document.getElementById(id).innerText = "";
}

/* -------- VALIDAÇÃO NOME -------- */

if(nome.length < 3){
mostrarErro("erro-nome","Nome muito curto");
}else{
limparErro("erro-nome");
}

/* -------- VALIDAÇÃO EMAIL -------- */

let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regexEmail.test(email)){
mostrarErro("erro-email","Email inválido");
}else{
limparErro("erro-email");
}

/* -------- VALIDAÇÃO SENHA -------- */

if(senha.length < 8){
mostrarErro("erro-senha","Senha deve ter 8 caracteres");
}else{
limparErro("erro-senha");
}

if(confirmaSenha !== senha){
mostrarErro("erro-confirma-senha","Senhas não coincidem");
}else{
limparErro("erro-confirma-senha");
}

/* -------- VALIDAÇÃO CPF -------- */

if(!validarCPF(cpf)){
mostrarErro("erro-cpf","CPF inválido");
}else{
limparErro("erro-cpf");
}

/* -------- VALIDAÇÃO TELEFONE -------- */

let regexTelefone = /^\(\d{2}\)\s\d{4,5}\-\d{4}$/;

if(!regexTelefone.test(telefone)){
mostrarErro("erro-telefone","Telefone inválido");
}else{
limparErro("erro-telefone");
}

/* -------- VALIDAÇÃO CEP -------- */

let regexCEP = /^\d{5}\-\d{3}$/;

if(!regexCEP.test(cep)){
mostrarErro("erro-cep","CEP inválido");
}else{
limparErro("erro-cep");
}

/* -------- VALIDAÇÃO DATA -------- */

let regexData = /^\d{2}\/\d{2}\/\d{4}$/;

if(!regexData.test(data)){
mostrarErro("erro-data-nascimento","Data inválida");
}else{
limparErro("erro-data-nascimento");
}

/* -------- VALIDAÇÃO VALOR -------- */

let regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/;

if(!regexValor.test(valor)){
mostrarErro("erro-valor","Valor inválido");
}else{
limparErro("erro-valor");
}

/* -------- VALIDAÇÃO URL -------- */

let regexURL = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\.-]*)*\/?$/;

if(!regexURL.test(url)){
mostrarErro("erro-url","URL inválida");
}else{
limparErro("erro-url");
}

/* -------- VALIDAÇÃO CARTÃO -------- */

let numeroCartao = cartao.replace(/\s/g,"");

let bandeira = detectarBandeira(numeroCartao);

if(bandeira == "Desconhecida"){
mostrarErro("erro-cartao","Cartão inválido");
}else{
limparErro("erro-cartao");
}

/* -------- RESULTADO -------- */

if(!erro){

document.getElementById("resultado").innerHTML = `
<h2>Cadastro realizado com sucesso! ✅</h2>

<p><b>Nome:</b> ${nome}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Telefone:</b> ${telefone}</p>
<p><b>CPF:</b> ${cpf}</p>
<p><b>CEP:</b> ${cep}</p>
<p><b>Data:</b> ${data}</p>
<p><b>Valor:</b> ${valor}</p>
<p><b>URL:</b> ${url}</p>
<p><b>Cartão:</b> ${bandeira}</p>
`;

}else{

document.getElementById("resultado").innerHTML = `
<h2>Erro no cadastro ❌</h2>
<p>Verifique os seguintes campos:</p>
<p>${errosLista.join("<br>")}</p>
`;

}

});

/* -------- FUNÇÃO VALIDAR CPF -------- */

function validarCPF(cpf){

cpf = cpf.replace(/[^\d]+/g,'');

if(cpf.length != 11) return false;

if(/^(\d)\1+$/.test(cpf)) return false;

let soma = 0;
let resto;

for(let i=1;i<=9;i++)
soma += parseInt(cpf.substring(i-1,i)) * (11 - i);

resto = (soma * 10) % 11;

if((resto == 10) || (resto == 11))
resto = 0;

if(resto != parseInt(cpf.substring(9,10)))
return false;

soma = 0;

for(let i = 1; i <= 10; i++)
soma += parseInt(cpf.substring(i-1,i)) * (12 - i);

resto = (soma * 10) % 11;

if((resto == 10) || (resto == 11))
resto = 0;

if(resto != parseInt(cpf.substring(10,11)))
return false;

return true;

}

/* -------- DETECTAR BANDEIRA -------- */

function detectarBandeira(numero){

let img = document.getElementById("bandeira-img");

let regras = {

visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
mastercard: /^5[1-5][0-9]{14}$/,
amex: /^3[47][0-9]{13}$/,
elo: /^(4011|4312|4389|4514|4576|5041|5067|5090|6277|6362)/

};

if(regras.visa.test(numero)){
img.src = "visa.png";
img.style.display="block";
return "Visa";
}

if(regras.mastercard.test(numero)){
img.src = "mastercard.png";
img.style.display="block";
return "Mastercard";
}

if(regras.amex.test(numero)){
img.src = "amex.png";
img.style.display="block";
return "American Express";
}

if(regras.elo.test(numero)){
img.src = "elo.png";
img.style.display="block";
return "Elo";
}

img.style.display="none";
return "Desconhecida";

}

/* -------- DETECTAR ENQUANTO DIGITA -------- */

document.getElementById("cartao").addEventListener("keyup", function(){

let numero = this.value.replace(/\s/g,"");

detectarBandeira(numero);

});