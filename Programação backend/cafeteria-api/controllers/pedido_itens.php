<?php

require_once 'database.php';
$database = new Database();

$method = $_SERVER['REQUEST_METHOD'];
$path   = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$segments = explode('/', $path);
$id = $segments[2] ?? null;

switch ($method) {
    case 'GET':
        $query = "SELECT * FROM pedido_itens";
        $params = [];
        if ($id) {
            $query .= " WHERE pedido_id = :id";
            $params = [':id' => $id];
        }
        $resultado = $database->executeQuery($query, $params);
        echo json_encode(['status' => 'success', 'data' => $resultado->fetchAll()]);
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $pedido_id = $body['pedido_id'];
        $produto_id = $body['produto_id'];
        $quantidade = $body['quantidade'];

        // Pega preço do produto
        $resProd = $database->executeQuery("SELECT preco FROM produtos WHERE id = :id", [':id' => $produto_id]);
        $prod = $resProd->fetch();
        $preco = $prod['preco'];
        $subtotal = $preco * $quantidade;

        // Insere item
        $database->executeQuery(
            "INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco) VALUES (:pid, :prid, :qty, :prc)",
            [':pid' => $pedido_id, ':prid' => $produto_id, ':qty' => $quantidade, ':prc' => $preco]
        );

        // Atualiza total do pedido
        $database->executeQuery("UPDATE pedidos SET total = total + :sub WHERE id = :pid", [':sub' => $subtotal, ':pid' => $pedido_id]);

        echo json_encode(['status' => 'success', 'message' => 'Item adicionado']);
        break;

    case 'DELETE':
        // Aqui o ID é o do ITEM, não do pedido
        $resItem = $database->executeQuery("SELECT pedido_id, preco, quantidade FROM pedido_itens WHERE id = :id", [':id' => $id]);
        $item = $resItem->fetch();
        
        if ($item) {
            $subtotal = $item['preco'] * $item['quantidade'];
            // Remove item
            $database->executeQuery("DELETE FROM pedido_itens WHERE id = :id", [':id' => $id]);
            // Atualiza total do pedido
            $database->executeQuery("UPDATE pedidos SET total = total - :sub WHERE id = :pid", [':sub' => $subtotal, ':pid' => $item['pedido_id']]);
            echo json_encode(['status' => 'success', 'message' => 'Item removido']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Metodo nao permitido']);
}
?>
