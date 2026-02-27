// ========== eventos do mouse ==========
var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");


area.addEventListener("click", function (event) {
    mensagem.textContent = "Clique detectado!";

});

area.addEventListener("dblclick", function () {
    mensagem.textContent = "";
    if (area.style.background == "lightgreen") {
        area.style.background = "red";
    } else {
        area.style.background = "lightgreen";
    }
});
area.addEventListener("mouseenter", function () {
    if (area.style.background == "lightgreen") {
        mensagem.textContent = "Palmeiras não tem mundial!";
    } else {
        mensagem.textContent = "O Corinthians é o melhor time do mundo!";
    }
});
var coordenadas = document.getElementById("posicao");
area.addEventListener("mousemove", function (event) {
    coordenadas.textContent = "X:" + event.clientX + " Y:" + event.clientY;

});

area.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Botão direito clicado!");
});

// ========== eventos do teclado ==========

document.addEventListener("keydown", function (event) {
    //console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function (event) {
    //console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function (event) {
    //console.log("Caractere digitado: " + event.key);
});

document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
    var campo = document.getElementById("resultado");
    campo.textContent = "Tecla pressionada: " + event.key;
    nome += 
// Também mostra no console
    console.log("Tecla pressionada: " + event.key);
});




// ========== eventos de formulário ==========






//========= eventos da janela ========== 