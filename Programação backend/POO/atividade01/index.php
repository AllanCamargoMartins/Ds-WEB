<?php 
echo "<h1>Atividade 01 - POO</h1>";
echo "<h2>Celular</h2>";
class Celular{
    public $cor; // atributo
    public $modelo; // atributo
    public $tipodecarregador; // atributo
    public $processador; // atributo

  public function modelocelular(){ // método
        return "O modelo do meu celular é ".$this->modelo." e tem o processador ".$this->processador;
    }

    public function ligar(){ // método
        return "Liguei o celular da marca ".$this->marca." e tem a cor ".$this->cor." e o tipo de carregador é ".$this->tipodecarregador;
    }

    public function desligar(){ // método
        return "Desliguei o celular da marca ".$this->marca;
    }
  

}
$Style = new Celular(); 
$Style->marca = "Samsung";
$Style->cor = "Preto";
$Style->tipodecarregador = "USB-C";
$Style->modelo = "Galaxy S21";
$Style->processador = "Exynos 2100";
echo $Style->ligar();
echo "<br>";
echo $Style->desligar();
echo "<br>";
echo $Style->modelocelular();

echo "<h2> caixa de som</h2>";
class Caixadesom{
    public $cor; // atributo
    public $tamanho; // atributo
    public $tipodeconector; // atributo
    public $marca; // atributo

    public function modelocaixa(){ // método
        return "A minha caixa de som é da marca ".$this->marca;
    }
    public function tamanho (){ // método
        return "A minha caixa de som tem o tamanho ".$this->tamanho;
    }

     public function cor(){ // método
        return "A minha caixa de som tem a cor ".$this->cor;
    }

}
$Style = new Caixadesom(); 
$Style->marca = "Staner";
$Style->cor = "Preto";
$Style->tipodeconector = "Jack 3.5mm";
$Style->tamanho = "Grande";
echo $Style->modelocaixa();
echo "<br>";
echo $Style->tamanho();
echo "<br>";
echo $Style->cor();

echo "<h2> cortina</h2>";
class Cortina{
    public $cor; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $fabricante; // atributo

    public function tamanho(){ // método
        return "A minha cortina é do tamanho ". $this->tamanho;
    }
        public function modelocortina(){ // método
            return "A minha cortina é da marca ".$this->fabricante." e o material é ".$this->material;

}
public function cor(){ // método
    return "A minha cortina tem a cor, ".$this->cor." e seu material é ".$this->material;
}

}

$Style = new Cortina(); 
$Style->fabricante = "Altex";
$Style->cor = "Preto";
$Style->material = "Tecido";
$Style->tamanho = "1.80cm x 2.0cm";
echo $Style->tamanho();
echo "<br>";
echo $Style->modelocortina();   
echo "<br>";
echo $Style->cor();


echo "<h2> caderno</h2>";
class Caderno{
    public $desenho; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $fabricante; // atributo

    public function modelocaderno(){ // método
        return "O meu caderno é da marca ".$this->fabricante;
    }
    public function tamanho(){ // método
        return "O meu caderno tem o tamanho ".$this->tamanho;
     }

     public function desenho(){ // método
        return "O meu caderno tem o desenho de ".$this->desenho;
     }

}
$Style = new Caderno(); 
$Style->fabricante = "Tilibra";
$Style->desenho = "Animais";
$Style->material = "Espiral";
$Style->tamanho = "A4";
echo $Style->modelocaderno();
echo "<br>";
echo $Style->tamanho();
echo "<br>";
echo $Style->desenho();


echo "<h2> moto</h2>";
class Moto{
    public $cor; // atributo
    public $tamanho; // atributo
    public $material; // atributo
    public $cilindrada; // atributo
    public $fabricante; // atributo

    public function modelomoto(){ // método
        return "A minha moto é da marca ".$this->fabricante;
    }
    public function cilindrada(){ // método
        return "A minha moto tem  ".$this->cilindrada;
     }

     public function cor(){ // método
        return "A minha moto tem a cor ".$this->cor;
     }

}
$Style = new Moto(); 
$Style->fabricante = "Honda";
$Style->cor = "Vermelha";
$Style->material = "Metal";
$Style->cilindrada = "150cc";
$Style->tamanho = "2.0m x 1.0m";
echo $Style->modelomoto();
echo "<br>";
echo $Style->cilindrada();
echo "<br>";
echo $Style->cor();
?>