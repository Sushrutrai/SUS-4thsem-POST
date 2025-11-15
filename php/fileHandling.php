<?php
    $filename="D:/4thSem(BCA)/SUS(4thsem)/Example.txt";
    $file=fopen($filename,"r");
    $content=fread($file,filesize($filename));
    echo $content;
    fclose($file);
?>