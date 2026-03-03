<?php

class Veiculo {

    public $marca;
    public $modelo;

    private $velocidade;

    public function setVelocidade($velocidade){
        $this->velocidade = $velocidade;
    }

    public function getVelocidade(){
        return $this->velocidade;
    }
}
class Carro extends Veiculo {
    public function acelerar(){
        $novaVelocidade = $this->getVelocidade() + 10;
        $this->setVelocidade($novaVelocidade);
    }
}
class Moto extends Veiculo {
    public function acelerar(){
        $novaVelocidade = $this->getVelocidade() + 20;
        $this->setVelocidade($novaVelocidade);
    }
}

$carro = new Carro();
$carro->marca = "Fiat";
$carro->modelo = "Uno";
$carro->setVelocidade(0);

$moto = new Moto();
$moto->marca = "Honda";
$moto->modelo = "CG";
$moto->setVelocidade(0);

echo "Carro: {$carro->marca} {$carro->modelo}<br>";
$carro->acelerar();
echo "Velocidade: " . $carro->getVelocidade() . " km/h<br>";

echo "------------------------<br>";

echo "Moto: {$moto->marca} {$moto->modelo}<br>";
$moto->acelerar();
echo "Velocidade: " . $moto->getVelocidade() . " km/h<br>";

?>