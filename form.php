<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post"name="evenodd">
        Number<input type="number"id="num" name="num" required>
        <input type="submit" name="submit" value="Check">
        <input type="reset" name="reset" value="Reset">
    </form>
    <?php
     
         if(isset($_POST['submit'])){
            $num=$_POST['num'];
            if($num%2==0){
                echo "The number ".$num." is even.";
            }else{
                echo "The number ".$num." is odd.";
            }
        }

    
    ?>
</body>
</html>