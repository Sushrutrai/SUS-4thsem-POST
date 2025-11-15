<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello!</title>
</head>
<body>
    <h1>This is php</h1>
    <?php
        echo"Hello, World";    //This is first program for 4th sem bca
        ?>
        <br>
        <?php
        if(FALSE){
            echo("This is false");
        }else{
            echo("This is true\n");
        }
            ?><br><?php
            $val=22;
            $float=344.5;
            $hex=0x86;
            echo "Integer val=".$val."</br>Float val=".$float."</br>HEX val=".$hex;
            echo"</br>";

            $bikes=array("MT","NK","RE");
            var_dump($bikes);
            echo"</br>1st bike =".$bikes[0];

            class bike{
                function display(){
                    $model="Yamaha";
                    echo"</br>The bike is a ".$model;
                }
            }
            $object=new bike();
            $object->display();
            ?>
</body>
</html>