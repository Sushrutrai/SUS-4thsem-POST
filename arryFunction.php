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

        $arr2=["one","two","three","four","five"];
        $len=count($arr2);
        for($i=0;$i<$len;$i++){
            echo $arr2[$i]."</br>";
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

        echo"Associative array functions:</br>";
        $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
        echo "Peter is ".$age['Peter']." years old."."</br>";

        foreach($age as $x=>$x_val){
            echo"Key: ".$x."Value: ".$x_val."</br>";
        }

        $secondArray=array(
            array(1,2,3),
            array(4,5,6),
            array(7,8,9));

        echo $secondArray[0][0]."</br>";
        echo $secondArray[0][1]."</br>";
        echo $secondArray[1][0]."</br>";
        echo $secondArray[1][1]."</br>";
        echo"</br>Using nested loops to print 2D array:</br>";

        $len2=count($secondArray);
        for($i=0;$i<$len2;$i++){
            echo"<p><b>Row number $i</b></p>";
            echo"<ul>";
            for($j=0;$j<count($secondArray[$i]);$j++){
                echo "<li>".$secondArray[$i][$j]."</li> ";
            }
            echo"</ul>";
        }
    ?>
</body>
</html>