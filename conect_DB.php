<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>テスト</title>
</head>
<body>
<div>
    <?php
    //ログイン情報の保存

    // 変数の初期化
    $sql = null;
    $stm = null;
    $dbh = null;

    $user = 'root';
    $password = 'root';
    $dsn = 'mysql:dbname=test;host=localhost';

    try {
        //pdoを通して支持
        $dbh = new PDO($dsn, $user, $password);
        //var_dump($dbh);
        echo 'データベース' . $dbName . 'に接続しました';

        //SQL文の取り出し
        $sql = "SELECT * FROM test";
        $stm = $dbh->query($sql);
        //var_dump($stm);
        foreach ($stm as $value) {
            echo 'ID: ' . $value['username'] . ' / PASS: ' . $value['password'];
        }
    } catch (PDOException $e) {
        print('Error;' . $e->getMessage());
        die();
    }
    // 接続を閉じる
    $dbh = null;

    ?>
</div>
</body>
</html>
