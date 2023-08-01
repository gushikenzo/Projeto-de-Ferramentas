<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sugestão Recebida!</title>
    <link rel="stylesheet" href="../../geral.css">
</head>
<body>
    <?php
        $conexao = mysqli_connect("localhost", "root", "", "dbescola");

        // Verificar conexão
        if (mysqli_connect_errno()) {
            echo "Falha na conexão com o banco de dados: " . mysqli_connect_error();
            exit;
        }

        echo "Conectado ao banco de dados.<br>";

        $nome = $_POST['nome'];
        $serie = $_POST['serie'];
        $email = $_POST['email'];
        $comentario = $_POST['comentario'];

        // Preparar consulta SQL
        $sql = "INSERT INTO form (nome, serie, email, comentario) VALUES ('$nome', '$serie', '$email', '$comentario')";

        // Executar consulta SQL
        if (mysqli_query($conexao, $sql)) {
            echo "Sugestão enviada com sucesso!";
        } else {
            echo "Erro ao enviar sugestão: " . mysqli_error($conexao);
        }

        // Fechar conexão
        mysqli_close($conexao);
    ?>
</body>
</html>