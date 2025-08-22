<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array Function</title>
</head>
<body>
    <?php 
        $arr=[1,2,34343,55,0];
        usort($arr,function($a,$b){
            return $a-$b;
        });
        foreach($arr as $val){
            echo $val."</br>";
        }

        echo"</br>Today's day in different formats:</br>";
        echo date("d/m/Y")."</br>";
        echo date("d-m-Y")."</br>";
        echo date("d.m.Y")."</br>";
        echo date("d/m/Y H:i:s")."</br>";

        $timestamp=time();
        echo $timestamp."</br>";
        echo date("F d, Y H:i:s A",$timestamp)."</br>";
        echo date("d-m-Y H:i:s",mktime(10, 30, 12, 10, 22, 2023))."</br>";
    ?>
</body>
</html>