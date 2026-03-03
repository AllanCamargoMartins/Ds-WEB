<?php

class Pessoa {

    public $nome;
    public $idade;

    public function __construct($Novonome, $Novoidade){
        $this->nome = $Novonome;
        $this->idade = $Novoidade;
    }

    public function exibirDados(){
        return "Nome: " . $this->nome . ", Idade: " . $this->idade;
    }

    public function Alterardados($Novonome, $Novoidade){
        $this->nome = $Novonome;
        $this->idade = $Novoidade;
    }
}

$pessoa = new Pessoa("Daniel", 25);

$pessoa->Alterardados("Maria", 30);

echo "<br>";

echo $pessoa->exibirDados();