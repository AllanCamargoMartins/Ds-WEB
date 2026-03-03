<?php

class Artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero) {
        $this->nome   = $nome;
        $this->genero = $genero;
    }
}

class Musica {
    public $titulo;
    public $duracao;
    public $artista; // objeto do tipo Artista

    public function __construct($titulo, $duracao, Artista $artista) {
        $this->titulo  = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }

    public function exibirInfo() {
        echo $this->titulo . " | Duração: " . $this->duracao . "<br>";
        echo "Artista: " . $this->artista->nome . " | Gênero: " . $this->artista->genero;
    }
}


// Criando o artista
$artista = new Artista("Metallica", "Rock");

// Criando a música
$musica = new Musica("Nothing Else Matters", "6:25", $artista);

// Exibindo
$musica->exibirInfo();