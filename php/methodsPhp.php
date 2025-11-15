<?php
    $a=10;
    $b=5;
    $c=10;
    $d="10";
    echo(($a**$b)."</br>");
    echo(($a%$b)."</br>");  
    echo(($a/$b)."</br>");
    echo(($a*$b)."</br>");
    echo( $a===$b?"Equal":"Not Equal"."</br>");
    var_dump($a===$b);
    echo("</br>");
    var_dump($a===$c);
    echo("</br>");
    var_dump($a===$d);
    echo("</br>");
    echo("</br>");
    
    $arr=array("a"=>"Red","b"=>"Green","c"=>"Blue");
    $new_arr=array("d"=>"Yellow","e"=>"White","f"=>"Black");
    $union=$arr+$new_arr;
    var_dump($union);

    echo("</br>");
    echo("</br>");

    class Dev extends Coder{
    }
    class Coder{
    }
    $Bhupes=new Dev();
    if($Bhupes instanceof Dev){
        echo "Object is an instance of class Dev";
    }
    else{
        echo "Object is not an instance of class Dev";
    }
    echo("</br>");
    var_dump($Bhupes instanceof Coder);
    echo("</br>");
?>