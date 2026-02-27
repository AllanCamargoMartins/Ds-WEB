<?php 

class Pessoa{
    public $nome; // atributo

    public function falar(){ // método
        return "O meu nome é ".$this->nome;
    }

}
$Allan = new Pessoa(); 
$Allan->nome = "Allan Camargo";
echo $Allan->falar();
?>