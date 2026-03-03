<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <title>Desafio 02</title>
</head>
<body>
    <form method="post">
        <label for="cpf">Digite um CPF:</label>
        <br>
        <br>
        <input type="text" name="cpf" id="cpf" required>
        <br>
        <br>
        <button type="submit">Enviar</button>
        <br>
        <br>
        <br>
</body>
</html>
<?php
class Documento {
    private $numero;
    public function setNumero($numero){
        $this->numero = $numero;
    }
    public function getNumero(){
        return $this->numero;
    }
}
class CPF extends Documento {
    public function validar(){
        $cpf = $this->getNumero();
        $cpf = preg_replace('/[^0-9]/', '', $cpf);
        if(strlen($cpf) != 11){
            return false;
        }
        if(preg_match('/(\d)\1{10}/', $cpf)){
            return false;
        }
        for($t = 9; $t < 11; $t++){
            $soma = 0;
            for($i = 0; $i < $t; $i++){
                $soma += $cpf[$i] * (($t + 1) - $i);
            }
            $digito = ((10 * $soma) % 11) % 10;
            if($cpf[$t] != $digito){
                return false;
            }
        }
        return true;
    }
}
if (isset($_POST['cpf'])) {
    $cpf = new CPF();
    $cpf->setNumero($_POST['cpf']);
    if($cpf->validar()){
        echo "CPF válido!";
    } else {
        echo "CPF inválido!";
    }
}
?>