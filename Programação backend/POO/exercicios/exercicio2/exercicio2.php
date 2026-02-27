<?php

abstract class Animal {

    abstract public function fazerSom();

    public function mover(){
        return "Anda";
    }
}

class Cachorro extends Animal {

    public function fazerSom(){
        return "Late";
    }
}

class Gato extends Animal {

    public function fazerSom(){
        return "Mia";
    }
}

class Passaro extends Animal {

    public function fazerSom(){
        return "Canta";
    }

    public function mover(){
        return "Voa e " . parent::mover();
    }
}

$pluto = new Cachorro();
echo $pluto->fazerSom() . "<br/>";
echo $pluto->mover() . "<br/>";
echo "-------------------------<br/>";

$garfield = new Gato();
echo $garfield->fazerSom() . "<br/>";
echo $garfield->mover() . "<br/>";
echo "-------------------------<br/>";

$ave = new Passaro();
echo $ave->fazerSom() . "<br/>";
echo $ave->mover() . "<br/>";

?>