<!DOCTYPE html>
</div>
<html>
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" type="text/css" href="login.css"/>
</head>
<body>
<?php
//ログイン情報の保存

session_start();

// 変数の初期化
$sql = null;
$stm = null;
$dbh = null;

// エラーメッセージの初期化
$errorMessage = "";

$user = 'root';
$password = 'root';
$dsn = 'mysql:dbname=test;host=localhost';

try {
    //pdoを通して支持
    $dbh = new PDO($dsn, $user, $password);
    //var_dump($dbh);
    //echo 'データベース' . $dbName . 'に接続しました';

    //SQL文の取り出し
    $sql = "SELECT * FROM test WHERE ";
    $stm = $dbh->query($sql);
    //var_dump($stm);
    foreach ($stm as $value) {
        //echo 'ID: ' . $value['username'] . ' / PASS: ' . $value['password'];
    }
} catch (PDOException $e) {
    print('Error;' . $e->getMessage());
    die();
}
// 接続を閉じる
$dbh = null;

?>
<?php
//ログイン処理
$id = $_REQUEST['ID'];
$pw = $_REQUEST["PW"];
$flg = (boolval(false));
if ($id === "koke9665" && $pw === "koke9665") {
    $flg = true;
} else {
    $flg = false;
}
?>
<?php if ($flg === true): ?>
    <div class="login">
        <?php
        require_once("conect_DB.php");
        echo 'ようこそ ' . $id . ' 様、画面が変わりますのでしばらくお待ち下さい';
        ?>
    </div>
<?php else: ?>
    <div class="login">
        <h1>IDまたはPWが間違っています</h1>
        <form method="post" action="login.html">
            <p>
                <a href="login.html">
                    <input type="submit" value="戻る"/>
            </p>
        </form>
    </div>
<?php endif ?>
</body>
</html>
