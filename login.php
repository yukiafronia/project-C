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
$id = $_REQUEST['ID'];
$pw = $_REQUEST["PW"];

// エラーメッセージの初期化
$errorMessage = "";

$user = 'root';
$password = 'root';
$dsn = 'mysql:dbname=testdb;host=localhost';

try {
    //pdoを通して指示
    $dbh = new PDO($dsn, $user, $password);
    //var_dump($dbh);
    echo 'データベース' . $dbn . 'に接続しました';

    //SQL文の取り出し
    $sql = "SELECT * FROM User";
    $stm = $dbh->query($sql);
    // var_dump($stm);
    foreach ($stm as $value) {
      //  echo 'ID: ' . $value['Name'] . ' / PASS: ' . $value['Password'];

      //ログイン処理
        $id2 = $value['Name'];
        $pw2 = $value['Password'];
      $flg = (boolval(false));
      if ($id == $id2 && $pw == $pw2) {
        $_SESSION['name'] = $id2;
        $_SESSION['pw'] = $pw2;
          $flg = true;
          break;
      } else {
          $flg = false;
      }
      var_dump($flg);

    }
} catch (PDOException $e) {
    print('Error;' . $e->getMessage());
    die();
}
// 接続を閉じる
$dbh = null;


?>
<?php if ($flg === true): ?>
    <div class="login">
        <?php
        // require_once("conect_DB.php");
        // var_dump ($_SESSION['id']);
        echo 'ようこそ ' . $_SESSION['name'] . ' 様、画面が変わりますのでしばらくお待ち下さい';
        ?>
        <p><a href=index.php>戻らない場合はこちらをクリックしてください</a></p>
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
