<?php
    $connection=new mysqli("localhost","root","");

    if($connection->connect_error){
        die("could not connect to server:");
    }
    $sql="create database if not exists college1";
    if($connection->query($sql)==TRUE){
        echo"database created";
    }else{
        echo"error creating database".$connection->error;
    }
    $connection->select_db("college1");
?>