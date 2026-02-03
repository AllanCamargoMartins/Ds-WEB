<?php 
echo "<h1>Atividade 01 - POO</h1>";
echo "<h2>Celular</h2>";
class Celular{
    public $cor; // atributo
    public $modelo; // atributo
    public $tipodecarregador; // atributo
    public $processador; // atributo

    public function falar(){ // método
        return "O meu celular é da marca ".$this->marca." e tem a cor ".$this->cor." e o tipo de carregador é ".$this->tipodecarregador;
    }

}
$Style = new Celular(); 
$Style->marca = "Samsung";
$Style->cor = "Preto";
$Style->tipodecarregador = "USB-C";
echo $Style->falar();

echo "<h2> caixa de som</h2>";
class Caixadesom{
    public $cor; // atributo
    public $tamanho; // atributo
    public $tipodeconector; // atributo
    public $marca; // atributo

    public function falar(){ // método
        return "A minha caixa de som é da marca ".$this->marca." e tem a cor ".$this->cor." e o tipo de conector é ".$this->tipodeconector;
    }

}
$Style = new Caixadesom(); 
$Style->marca = "Staner";
$Style->cor = "Preto";
$Style->tipodeconector = "Jack 3.5mm";
echo $Style->falar();

echo "<h2> cortina</h2>";
class Cortina{
    public $cor; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $fabricante; // atributo

    public function falar(){ // método
        return "A minha cortina é da marca ".$this->fabricante." e tem a cor ".$this->cor." e o material é ".$this->material;
    }

}
$Style = new Cortina(); 
$Style->fabricante = "Altex";
$Style->cor = "Preto";
$Style->material = "Tecido";
echo $Style->falar();

echo "<h2> caderno</h2>";
class Caderno{
    public $desenho; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $fabricante; // atributo

    public function falar(){ // método
        return "O meu caderno é da marca ".$this->fabricante." e tem a o desenho ".$this->desenho." e o material é ".$this->material;
    }

}
$Style = new Caderno(); 
$Style->fabricante = "Tilibra";
$Style->desenho = "Animais";
$Style->material = "Espiral";
echo $Style->falar();

echo "<h2> moto</h2>";
class Moto{
    public $cor; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $cilindrada; // atributo
    public $fabricante; // atributo

    public function falar(){ // método
        return "A minha moto é da marca ".$this->fabricante." e tem a cor ".$this->cor." e o material é ".$this->material." e a cilindrada é ".$this->cilindrada;
    }

}
$Style = new Moto(); 
$Style->fabricante = "Honda";
$Style->cor = "Vermelha";
$Style->material = "Metal";
$Style->cilindrada = "150cc";
echo $Style->falar();
?>