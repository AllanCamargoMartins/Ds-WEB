<?php
abstract class Produto {
    public $nome;
    public $preco;
    protected $estoque;
    public function __construct($nome, $preco, $estoque){
        $this->nome = $nome;
        $this->preco = $preco;
        $this->estoque = $estoque;
    }
    public function getNome(){
        return $this->nome;
    }
    public function getPreco(){
        return $this->preco;
    }
    public function getEstoque(){
        return $this->estoque;
    }
    abstract public function calcularDesconto();
}
class Eletronico extends Produto {
    public function calcularDesconto(){
        $desconto = 0.10;
        if($this->estoque < 5){
            $desconto += 0.10;
        }
        $precoFinal = $this->preco - ($this->preco * $desconto);
        return $precoFinal;
    }
}
class Roupa extends Produto {
    public function calcularDesconto(){
        $desconto = 0.20;
        if($this->estoque < 5){
            $desconto += 0.10;
        }
        $precoFinal = $this->preco - ($this->preco * $desconto);
        return $precoFinal;
    }
}
$tv = new Eletronico("Smart TV", 2500, 3);
$camisa = new Roupa("Camisa", 100, 10);

echo "Produto: " . $tv->getNome() . "<br>";
echo "Preço final: R$ " . $tv->calcularDesconto() . "<br>";
echo "-----------------------<br>";
echo "Produto: " . $camisa->getNome() . "<br>";
echo "Preço final: R$ " . $camisa->calcularDesconto() . "<br>";
?>