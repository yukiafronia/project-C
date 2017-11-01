<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>テスト</title>
</head>
<body>
<div>
    <?php
    $user = 'testuser';
    $password = 'koke9665';
    $dbName = 'testdb';
    $host = 'localhost:8889';
    $dsn = "mysql:host={$host};dbname={$dbName};charset=utf8";

    try {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "データベース{dbName}に接続しました";
        $pdo = NULL;
    } catch (Exception $e) {
        echo '<span class="error">エラーがありました</span><br>';
        echo $e->getMessage();
        exit();
    }
    ?>
</div>
</body>
</html>
