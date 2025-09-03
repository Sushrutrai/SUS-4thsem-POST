<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php form</title>
</head>
<body>
    <main>
        <?php
        if($_SERVER["REQUEST_METHOD"]=="GET"):?>

        <form action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>"method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required placeholder="Enter your name"><br><br> 
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email"><br><br>
            <input type="submit"name="submit" value="Subscribe">
            </form>
            <?php else:?>
                <?php
                    if(isset($_POST['name'],$_POST['email'])){
                        $name=htmlspecialchars($_POST['name']); 
                        $email=htmlspecialchars($_POST['email']); 
                        echo"Thank you $name for subscribing.<br>";
                        echo"We will contact you shortly on your email: $email";
                    }else{
                        echo"Please provide all the required details.";
                    }
                ?>
            <?php endif?>
    </main>
</body>
</html>