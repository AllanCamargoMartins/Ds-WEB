<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <title>Exercício 01</title>
</head>
<body>
    <form method="post">
        <label for="salario">Salário base:</label>
        <br>
        <br>
        <input type="number" name="salario" id="salario" required>
        <br>
        <br>
        <button type="submit">Enviar</button>
        <br>
        <br>
        <br>
</body>
<?php

class Pessoa {
    public $nome = "Roberto";
    public $idade = 23;
}

class Funcionario extends Pessoa {
    protected $salario;
}

class Gerente extends Funcionario {
    public function calcularSalario($salario){
        return ($salario * 0.20) + $salario;
    }
}

class Desenvolvedor extends Funcionario {
    public function calcularSalario($salario){
        return ($salario * 0.10) + $salario;
    }
}
if (isset($_POST['salario'])) {
    $salario = $_POST['salario'];
    $gerente = new Gerente();
    $desenvolvedor = new Desenvolvedor();
    echo "Salário do gerente: " . $gerente->calcularSalario($salario) . "<br>";
    echo "Salário do desenvolvedor: " . $desenvolvedor->calcularSalario($salario);
}


  
    