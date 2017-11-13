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
  $user = 'testuser';
  $password = 'koke9665';
  $dbName = 'testdb';
  $host = 'localhost:8889';
  $dsn = "mysql:host={$host};dbname={$dbName};charset=utf8";

  try {
      $pdo = new PDO($dsn, $user, $password);
      $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "データベース{dbName}に接続しました";
      $pdo = NULL;


  $sql = "SELECT * FROM user";
  $stm = $pdo->prepare($sql);
  $stm->execute();
  $result = $stm ->fetchAll(PDO::FETCH_ASSOC);
  echo "otinpoS";
    foreach($result as $row){
    echo "<th>", es($result['name']),"</td>";
      echo "<th>", es($result['password']),"</td>";
    }
  } catch (Exception $e) {
      echo '<span class="error">エラーがありました</span><br>';
      echo $e->getMessage();
      exit();
  }
  ?>
<?php
$id = $_GET["ID"];
$pw = $_GET["PW"];
$Error = fales;
if ($id == "114514" && $pw == "810") {
    $Error = true;
} else {
    $Error = false;
}
?>
<?php if ($Error): ?>
    <div class="login">
        <?php
        require_once("conect_DB.php");
        echo 'ようこそ ', $id, ' 様、画面が変わりますのでしばらくお待ち下さい';
        ?>
    </div>
<?php else: ?>
    <div class="login">
        <h1>IDまたはPWが間違っています</h1>
        <form methot="POST" action="login.html">
            <p>
                <a href="login.html">
                    <input type="submit" value="戻る" 　/>
            </p>
        </form>
    </div>
<?php endif ?>
</body>
</html>
