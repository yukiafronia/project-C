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

    //var_dump($sisetu);

    // エラーメッセージの初期化
    $errorMessage = "";

    $user = 'root';
    $password = 'root';
    $dsn = 'mysql:dbname=testdb;host=localhost';

    try {
        //pdoを通して指示
        $dbh = new PDO($dsn, $user, $password);
        //var_dump($dbh);
      //  echo 'データベース' . $dbn . 'に接続しました';

        // SQL文の取り出し
        $sql = "INSERT INTO `yoyakujoho` (`sisetu`,`yoyakusya`, `year`,`month`,`day`,`time`,`place`) VALUES ('$sisetu','$yoyakusya', '$year', '$month', '$day', '$time', '$place');";

        $stm = $dbh->query($sql);
        // var_dump($stm);
        foreach ($stm as $value) {
          //  echo 'ID: ' . $value['Name'] . ' / PASS: ' . $value['Password'];
        }

          //SQL文の取り出し
          $sql = "SELECT * FROM `User` WHERE `Name` LIKE '$yoyakusya'";

          $stm = $dbh->query($sql);
          foreach ($stm as $value) {
            //  echo 'adress: ' . $value['mall_adress'];
              mb_language("Japanese");
              mb_internal_encoding("UTF-8");

              $to      = $value['mall_adress'];
              $title = '予約完了のお知らせ';
              $message = '本日'.$sisetu.$year.$month.$day.$time.$place.'にて予約が完了しました。キャンセルする場合はお問い合わせの方にお願いします。';
              $headers = 'From: b6p31080@shonan.bunkyo.ac.jp' . "\r\n";

              if(mb_send_mail($to, $title, $message, $headers)){
                echo ("メールが送られました");
              }else{
                echo ("メールを送るのを失敗しました。");
              }
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
