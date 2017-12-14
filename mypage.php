<!DOCTYPE html>
<?php
session_start();
?>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="mypage.css"/>
    <title></title>
  </head>
  <body>
    <div class = "name">
    <?php
    echo ($_SESSION['name'])."様のマイページ";
    ?>
  </div>
  <h1>お知らせ</h1>
    <div class = "yoyaku">
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
        //echo 'データベース' . $dbn . 'に接続しました<br>';

        //SQL文の取り出し
        $sql = "SELECT * FROM `yoyakujoho` WHERE yoyakusya='$yoyakusya'";

        $stm = $dbh->query($sql);
        // var_dump($stm);
        foreach ($stm as $value) {
        echo '予約日程 : ' . $value['sisetu']. $value['year'] . $value['month'] . $value['day'] . $value['time'] . $value['place']."にて予約を行いました。<br>";

        }
    } catch (PDOException $e) {
        print('Error;' . $e->getMessage());
        die();
    }

    ?>
  </div>
  <h1>予約の状態</h1>
  <div class ="yoyaku">
  <?php
  //SQL文の取り出し
  $sql = "SELECT * FROM `yoyakujoho` WHERE yoyakusya='$yoyakusya'";

  $stm = $dbh->query($sql);
  // var_dump($stm);
  foreach ($stm as $value) {
  echo  '場所 : '.$value['sisetu'].' /年 : '. $value['year'] .' /月 : '. $value['month'] .' /日付 : '. $value['day'] .' /時刻 : '. $value['time'] .' /場所 : '. $value['place']."<br>";

  }
  // 接続を閉じる
  $dbh = null;
  ?>
</div>
  </body>
</html>
