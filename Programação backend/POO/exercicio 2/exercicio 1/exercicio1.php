<?php

class Dono {
    public $nome;
    public $telefone;

    public function __construct($nome, $telefone) {
        $this->nome = $nome;
        $this->telefone = $telefone;
    }
}

class Animal {
    public $nome;
    public $especie;
    public Dono $dono ; 

    public function __construct($nome, $especie, Dono $dono) {
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }

    public function exibir() {
        echo $this->nome . " | " . $this->especie . "<br>";
        echo "Dono: " . $this->dono->nome . " | Tel: " . $this->dono->telefone;
    }
}



$dono = new Dono("Allan", "(15) 991821757");

$animal = new Animal("Rex", "Cachorro", $dono);


$animal->exibir();