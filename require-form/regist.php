    <!DOCTYPE HTML PUBLIC "-//W C//DTD HTML 4.01 Transitional//EN"
"http://www.w .org/TR/html4/loose.dtd">
<html>
<head>
    <meta name="robots" content="noindex,nofollow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="rks_login.css" />
    <link rel="stylesheet" type="text/css" href="base.css" />
    <link rel="stylesheet" type="text/css" href="button.css" />
    <link rel="stylesheet" type="text/css" href="thickbox.css" />
    <script type="text/javascript" src="common_script.js"></script>
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="thickbox.js"></script>
    <script type="text/javascript" src="haihai_thickbox.js"></script>
    <script type="text/javascript" src="common_plugin_script.js"></script>
    <script type="text/javascript" src="jquery.qtip.min.js"></script>
</head>

<body class="userbody">
    <?php
    $con = mysql_connect('localhost','b6p31080','koke9665');
    if(!$con){
        exit('データベースへ接続できませんでした。');
    }

    $result=mysql_select_db('registdb',$con);
    if(!$result){
        exit('データベースを選択できませんでした。');
    }

    $result=mysql_query('SET NAMES utf8',$con);
    if(!$result){
        exit('文字コードを指定できませんでした。');
    }

    $mailaddress=addslashes($_REQUEST['mailaddress']);
    $propval_1=addslashes($_REQUEST['propval_1']);
    $propval_2=addslashes($_REQUEST['propval_2']);
    $propval_3=addslashes($_REQUEST['propval_3']);
    $propval_4=addslashes($_REQUEST['propval_4']);
    $propval_5=addslashes($_REQUEST['propval_5']);
    $propval_6=addslashes($_REQUEST['propval_6']);
    $propval_7=addslashes($_REQUEST['propval_7']);
    $propval_8=addslashes($_REQUEST['propval_8']);

    $propval_13=addslashes($_REQUEST['propval_13']);

    $company=addslashes($_REQUEST['company']);
    $department_name=addslashes($_REQUEST['department_name']);

    $password=addslashes($_REQUEST['password']);

    $result=mysql_query("INSERT INTO address(mailaddress,propval_1,propval_2,propval_3,propval_4,propval_5,propval_6,propval_7,propval_8,propval_13,company,department_name,password)VALUES('$propval_1','$propval_2','$propval_3','$propval_4','$propval_5','$propval_6','$propval_7','$propval_8','$propval_13','$company','$department_name','$password')",$con);
    if(!$result){
        exit('データを登録できませんでした。');
    }
    ?>
    
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td>
                </table>
    <div style="margin-top:40px; margin-bottom:40px;" align="center">
        
        <img src=/img/errorIc.gif />
        <div style="margin:20px;">
            ページが見つかりません
        </div>
        
        <div style="margin-top:10px">
            
            <a href="#" type="button" onClick="window.close();" class="nega_55">閉じる</a>
        </div>
    
    </div>
</body>
</html>