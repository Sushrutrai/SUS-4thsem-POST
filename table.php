<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            margin: auto;
            width: 60%;
            font-family: Arial, sans-serif;
            border: 2px solid black;
        }
        table  tr th,td{
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
<?php
include "index.php";

$create = "CREATE TABLE IF NOT EXISTS students (
        id INT(10) PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        address VARCHAR(100),
        `date` DATE
    );";

    if ($connection->query($create) === TRUE) {
        echo "Table has been created.";
    } else {
        echo "Error creating table: " . $connection->error;
    }
    $insert='insert into students(name,address,date) values("kamles","pune","2024-06-10"),("rahul","mumbai","2024-05-15"),("sneha","delhi","2024-04-20")';
    if($connection->query($insert)===TRUE){
        echo"records inserted";
    }
    $result=$connection->query("SELECT * FROM students");
    echo"<table ><tr><th>ID</th><th>Name</th><th>Address</th><th>Date</th></tr>";
    if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        echo"<tr><td>$row[id].</td><td>$row[name]</td><td>$row[address]</td><td>$row[date]</td></tr>";
        }
    }
?>

    
</body>
</html>