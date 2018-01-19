<!DOCTYPE html>
<?php
session_start();
?>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="mypage.css"/>
    <script src="./javascript/jquery-3.2.1.min.js"></script>
    <script src="./javascript/maypage.js"></script>
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
    $dsn = 'mysql:dbname=koke9665;host=localhost';

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
  <div class ="yoyaku" style="margin-bottom:20px;">
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

<div class="detail">
    <div class="contents">
        <div class=header>
            <a class="bottom" id="yoyaku">
                <img src="img/yoyaku.png" onmouseover="this.src='img/yoyaku.png'" onmouseout="this.src='img/yoyaku.png'"
                     class="yoyaku"/>
            </a>
            <a class="bottom2" id="sousa">
                <img src="img/sousahouhou.png" onmouseover="this.src='img/sousahouhou.png'"
                     onmouseout="this.src='img/sousahouhou.png'" class="yoyaku"/>
            </a>
            <input id="login"  type="button" value="ログイン画面"/>
        </div>
        <h4>システムからのお知らせ</h4>
        <p class="systeminformation_box">
            2017.10.10 更新【重要】
            <br/>
            郡山市公会堂休館のお知らせ
            構造補強改修工事に伴い、平成３０年１月～平成３０年６月末まで休館いたします。
            <br/>
            2017.4.1 更新 【重要】
            <br/>
            インターネット申請後のキャンセル料（不返還相当分）について
            公共施設の使用料の支払等の変更に伴い、インターネット申請についても、使用許可後にキャンセルした場合には、これまでの窓口申請と同様にキャンセル料（不返還相当分）がかかるようになります。
            つきましては、インターネット申請をする場合、十分な検討のうえ、申請していただきますようにお願いします。
            ※なお、キャンセル等の詳細につきましては、各施設に直接ご確認ください。
            <br/>
            2017.3.25 更新
            <br/>
            日和田野球場を利用される皆様へ
            3/25は野球場周辺の道路が大変混雑することが予想されるため、当該施設併設の駐車場及び駐輪場の使用を終日禁止いたします。
            ご利用の方々には、ご迷惑をおかけしますがご理解とご協力よろしくお願いいたします。
        </p>
        <h4>自治体からのお知らせ</h4>
        <p class="information_box">
            2017.10.10 更新　システムメンテナンスのお知らせ
            <br/>
            10/10 24:00～10/11 3:00まで定期システムメンテナンスを行います
            上記時間は、システムへのアクセスが出来なくなりますのでご注意ください。
        </p>
    </div>
    <div id="map">
        <script>
            var map;

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
                    center: { // 地図の中心を指定
                        lat: 35.3693602, // 緯度
                        lng: 139.415621 // 経度
                    },
                    zoom: 15 // 地図のズームを指定
                });
            }

        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtEdxaxy74Iyh_BKep6T__8XMZq8POXnw&callback=initMap"
                async defer></script>
    </div>
    <div style="margin:10px;float:left;">
        <a href="https://twitter.com/Bunkyo_univ" class="twitter-follow-button" data-show-count="false"
           data-size="large">Follow @@Bunkyo_univ</a>
        <script>!function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');</script>
    </div>
</div>
  </body>
</html>
