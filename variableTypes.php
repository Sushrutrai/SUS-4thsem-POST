<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>These are php variables</h1>
    <?php
        $globalVar="This is vaiable of global scope";
        function local(){
            $lovalVar="This is variable with a local scope";
            echo $lovalVar."</br>";
        }
        local();
         
        $num1=10;
        $num2=20;
        function globalMethod(){
            global $globalVar;
           
            echo $globalVar."</br>";

            $sum=$GLOBALS['num1']+$GLOBALS['num2'];
            echo "Sum of num1 and num2 is: ".$sum."</br>";

        }
        globalMethod();

        function staticMethod(){
            static $count=40;
            $non_static=20;
            $count+=$count;
            $non_static+=$non_static;
            echo $count." </br>";
            echo $non_static." </br>";
        }
        staticMethod();
        staticMethod();
        staticMethod();
        staticMethod();

    ?>
</body>
</html>