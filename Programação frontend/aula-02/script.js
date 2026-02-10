
let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();
console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);



let hoje = new Date();
let diasparaadicionar =7;
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasparaadicionar);
console.log(novaData.toDateString());

//=======================================================================

let data1 = new Date ("2025-03-19");
let data2 = new Date ("2025-04-02");
let diferenciaDias = data2-data1;
diferenciaDias = diferenciaDias / (1000 * 60 * 60 * 24);
console.log(diferenciaDias);
//=======================================================================
//manipulando o DOM
/*
document.getElementById("conteudo").innerHTML = "<p></p>";
var valor= document.getElementById("conteudo").innerHTML;
console.log (valor);
*/
//=======================================================================
//usando o setAttribute
document.getElementById("foto").setAttribute("src","911.jpg");
console.log(document.getElementById("foto").getAttribute("src"));
//=======================================================================
//alterando propriedade Css

//=======================================================================
//criando uma função para um botao

function almentarTamanho(){
    document.getElementById("conteudo").style.padding = "200px";

}
