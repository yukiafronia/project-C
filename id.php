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
    var_dump ($_SESSION['name']);
    echo $_SESSION['id']
    ?>
  </body>
</html>
