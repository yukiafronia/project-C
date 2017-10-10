<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="login.css" />
    <title></title>
  </head>
  <body>
    <?php
      $id = $_GET["ID"];
      $pw = $_GET["PW"];
      $Error = fales;
        if($id=="114514" && $pw=="810"){
          $Error=true;
        }
        else{
          $Error=false;
        }
    ?>
    <?php if($Error): ?>
      <div class="login">
        <?php
        echo 'ようこそ ',$id,' 様、画面が変わりますのでしばらくお待ち下さい';
        ?>
      </div>
    <?php else: ?>
      <div class="login">
        <h1>IDまたはPWが間違っています</h1>
          <form methot="POST" action="login.html">
          <p>
            <a href="login.html"><input type="submit" value="戻る"　>
          </p>
          </form>
      </div>
    <?php endif ?>
  </body>
</html>
