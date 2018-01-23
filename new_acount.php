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
$adress = $_REQUEST["Adress"];

// エラーメッセージの初期化
$errorMessage = "";

$user = 'koke9665';
$password = 'proj079';
$dsn = 'mysql:dbname=koke9665;host=localhost';

try {
    //pdoを通して指示
    $dbh = new PDO($dsn, $user, $password);
    //var_dump($dbh);
    echo 'データベース' . $dbn . 'に接続しました';

    //SQL文の取り出し
    $sql = "INSERT INTO `User` (`Name`,`Password`,`mall_adress`) VALUES ('$id','$pw','$adress')";
    $stm = $dbh->query($sql);
    // var_dump($stm);
    // echo 'adress: ' . $adress
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");

    $to = $adress;
    $title = 'ご登録ありがとうございます。';
    $message = '先ほどご登録が完了致しましたので、予約がいつでも可能となっております。また、困ったことがあればぜひお問い合わせ窓口のほうにお願いします。';
    $headers = 'From: b6p31080@shonan.bunkyo.ac.jp' . "\r\n";

    if (mb_send_mail($to, $title, $message, $headers)) {
        echo("メールが送られました");
    } else {
        echo("メールを送るのを失敗しました。");
    }


}catch (PDOException $e) {
    print('Error;' . $e->getMessage());
    die();
}
// 接続を閉じる
$dbh = null;

?>
<font color=white>
<div class="login">
  <div class="login2">
    <h1>登録が完了しました。</h1>
    <form method="post" action="login.html">
        <p>
            <?php echo($id . "様、ご登録ありがとうございます。メールを送信致しましたので、確認の方をお願いします。"); ?>
            <input type="submit" value="戻る"/>
        </p>
    </form>
  </div>
</div>
</font>
</body>
</html>
