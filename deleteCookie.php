<?php
    setcookie("user","Hira",time()-3600,"/");
    echo"Cookie deleted.<br>";
    if(count($_COOKIE)>0){
        echo"cookies are enabled";
    }else{
        echo"cookies are disabled";
    }
?>