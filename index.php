<?session_start();?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <title>公共施設予約システムへようこそ</title>
    <link rel="stylesheet" type="text/css" href="StyleSheet.css"/>
    <script src="./javascript/jquery-3.2.1.min.js"></script>
    <script src="./javascript/main2.js"></script>
    <script src="./javascript/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="./javascript/modernizr.custom.min.js"></script>
</head>
<body>
  <header class="page-header" role="banner">
<h1 class="title">郡山市　公共施設予約システム<div class="user"><?php echo "ようこそ".$_SESSION['name']." 様"?></div></h1>
</header>

<h2 class="head"></h2>
<header class="hero-header">
    <div class="inner">
        <div class="slideshow">
            <img src="./img/slide-1.jpg" alt="" width="1600" height="465">
            <img src="./img/slide-2.jpg" alt="" width="1600" height="465">
            <img src="./img/slide-3.jpg" alt="" width="1600" height="465">
            <img src="./img/slide-4.jpg" alt="" width="1600" height="465">
        </div>
    </div>
</header>

<div class = "detail">
<div class="page-main" role="main">
    <div id="buttons2">
        <h2>Menu</h2>
        <div class="inner clearfix">
            <button id = "logout">
                <span>
                    <img src="img/01_gr.png">
                    <img src="img/01_bl.png"><br>
                    Logout
                </span>
            </button>
            <button class = "bottom2">
                <span>
                    <img src="img/02_gr.png">
                    <img src="img/02_bl.png"><br>
                    How to use
                </span>
            </button>
            <button class = "bottom">
                <span>
                    <img src="img/03_gr.png">
                    <img src="img/03_bl.png"><br>
                    Reservation
                </span>
            </button>
            <button class = "bottom3">
                <span>
                    <img src="img/04_gr.png">
                    <img src="img/04_bl.png"><br>
                    My page
                </span>
            </button>
        </div>
    </div>

</div>
</div>

<section class="work-section" id="work">

    <header class="section-header">
        <div class="inner clearfix">
            <h2>Pick up work</h2>
            <ul class="tabs-nav">
                <li><a href="#work01">Step 01</a></li>
                <li><a href="#work02">Step 02</a></li>
                <li><a href="#work03">Step 03</a></li>
                <li><a href="#work04">Step 04</a></li>
                <li><a href="#work05">Step 05</a></li>
            </ul>
            <span class="tabs-highlight"></span>
        </div>
    </header>

    <div class="section-body">
        <section class="tabs-panel" id="work01">
            <div class="image-wrapper">
                <img src="./img/work-1.jpg" alt="" width="1600" height="400">
            </div>
            <div class="content">
                <div class="inner">
                    <h3 class="title">Step 01</h3>
                    <p class="description">まずは借りたい施設を探しましょう</p>
                </div>
            </div>
        </section>
        <section class="tabs-panel" id="work02">
            <div class="image-wrapper">
                <img src="./img/work-2.jpg" alt="" width="1600" height="400">
            </div>
            <div class="content">
                <div class="inner">
                    <h3 class="title">Step 02</h3>
                    <p class="description">使いたい目的、料金から施設を探し出せます。</p>
                </div>
            </div>
        </section>
        <section class="tabs-panel" id="work03">
            <div class="image-wrapper">
                <img src="./img/work-3.jpg" alt="" width="1600" height="400">
            </div>
            <div class="content">
                <div class="inner">
                    <h3 class="title">Step 03</h3>
                    <p class="description">一人のアカウントごとに複数借りることができますが、忘れないようにしましょう。</p>
                </div>
            </div>
        </section>
        <section class="tabs-panel" id="work04">
            <div class="image-wrapper">
                <img src="./img/work-4.jpg" alt="" width="1600" height="400">
            </div>
            <div class="content">
                <div class="inner">
                    <h3 class="title">Step 04</h3>
                    <p class="description">予約した施設はマイページから確認することが可能です。</p>
                </div>
            </div>
        </section>
        <section class="tabs-panel" id="work05">
            <div class="image-wrapper">
                <img src="./img/work-5.jpg" alt="" width="1600" height="400">
            </div>
            <div class="content">
                <div class="inner">
                    <h3 class="title">Step 05</h3>
                    <p class="description">実際に使ってみましょう。</p>
                </div>
            </div>
        </section>
    </div>
</section>
<div class="infomation">
  <font color = "white">
  <label class = "input">
  <ul class = "input2">お名前<input type="text" placeholder="名前を入力してください" style="float: right;width: 55%;"></input></ul>
  <ul class = "input2">連絡先<input type="text" placeholder="メールアドレスをお願いします" style="float: right;width: 60%;"></input></ul>
  <ul class = "input2"><textarea name="お問い合わせ内容" rows="8" cols="40" placeholder="ここにお問い合わせ内容を記入してください"></textarea></ul>
  <ul class = "input2"><input type="submit" value = "送信"></ul>
</label>
</font>
</div>
</body>
</html>
