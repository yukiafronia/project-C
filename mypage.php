<!DOCTYPE html>
<?php
session_start();
?>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

    //予約情報の呼び出し
    $yoyakusya = $_SESSION['name'];

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
        $sql = "SELECT * FROM `yoyakujoho` WHERE yoyakusya='$yoyakusya'";

        $stm = $dbh->query($sql);
        // var_dump($stm);
        foreach ($stm as $value) {
        echo '予約日程 : ' . $value['sisetu']. $value['year'] . $value['month'] . $value['day'] . $value['time'] . $value['place'];

        }
    } catch (PDOException $e) {
        print('Error;' . $e->getMessage());
        die();
    }
    // 接続を閉じる
    $dbh = null;


    ?>
  </body>
</html>
