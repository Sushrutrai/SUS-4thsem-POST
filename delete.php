<?php
 include"index.php";
 $delete="delete from students where id=3";
 if($connection->query($delete)==true){
    echo"record deleted";
 }else{
    echo"error deleting record:".$connection->error;
 }
?>