<!DOCTYPE html>
<?php
//ログイン情報の呼び出し
session_start();
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link rel="stylesheet" type="text/css" href="kanryou_css.css">
  <title></title>
</head>
<body>
  <div>
    <h2>予約を完了しました。</h2><br />
    <a href="index.php" >トップに戻る</a>
    <?php

    //予約情報の呼び出し
    $yoyakusya = $_SESSION['name'];
    $sisetu = $_REQUEST['sisetu'];
    $year = $_REQUEST['year'];
    $month = $_REQUEST["month"];
    $day = $_REQUEST["day"];
    $time = $_REQUEST["time"];
    $place = $_REQUEST["place"];

    var_dump($sisetu);

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
        $sql = "INSERT INTO `yoyakujoho` (`sisetu`,`yoyakusya`, `year`,`month`,`day`,`time`,`place`) VALUES ('$sisetu','$yoyakusya', '$year', '$month', '$day', '$time', '$place');";

        $stm = $dbh->query($sql);
        // var_dump($stm);
        foreach ($stm as $value) {
          //  echo 'ID: ' . $value['Name'] . ' / PASS: ' . $value['Password'];

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
