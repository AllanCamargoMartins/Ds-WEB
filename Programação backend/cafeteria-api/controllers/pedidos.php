<?php

require_once 'database.php';
$database = new Database();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) {
    $id = $segments[2];
} else {
    $id = null;
}

switch ($method) {
    case 'GET':
        $resultado = $database->executeQuery('SELECT * FROM pedidos');
        $pedidos = $resultado->fetchAll();

        echo json_encode([
            'status' => 'success',
            'data' => $pedidos
        ]);
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = isset($body['nome']) ? trim($body['nome']) : '';

        if (!$nome) {
            echo json_encode([
                'status' => 'error',
                'message' => 'campo nome não informado'
            ]);
            break;
        }

        $database->executeQuery(
            'INSERT INTO pedidos(cliente) VALUES (:nome)',
            ['nome' => $nome]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'pedido cadastrado com sucesso',
            'idPedido' => $database->lastInsertId()
        ]);

        break;

    case 'PUT':
        if ($id) {
            $body = json_decode(file_get_contents('php://input'), true);
            if (isset($body['total'])) {
                $total = floatval($body['total']);
                $database->executeQuery(
                    'UPDATE pedidos SET total = :total WHERE id = :id',
                    ['total' => $total, 'id' => $id]
                );
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Total do pedido atualizado com sucesso'
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Campo total não informado'
                ]);
            }
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'ID não informado para edição'
            ]);
        }
        break;

    case 'DELETE':
        if ($id) {
            // Deleta itens do pedido primeiro por causa da chave estrangeira
            $database->executeQuery('DELETE FROM pedido_itens WHERE pedido_id = :id', ['id' => $id]);
            
            // Agora deleta o pedido
            $database->executeQuery('DELETE FROM pedidos WHERE id = :id', ['id' => $id]);
            
            echo json_encode([
                'status' => 'success',
                'message' => 'pedido deletado com sucesso'
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'ID não informado para exclusão'
            ]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode([
            'status' => 'error',
            'message' => 'Método não permitido.'
        ]);
}

?>