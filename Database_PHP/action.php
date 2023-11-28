<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            text-align: center;
        }

        .result {
            font-size: 20px;
            font-weight: bold;
        }
    </style>
<body>
<?php 
    $name = $_POST["Name"];
    $roll_no = $_POST["roll_no"];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "VIT";
    $sub1 = $_POST["subject1"];
    $sub2 = $_POST["subject2"];
    $sub3 = $_POST["subject3"];
    $sub4 = $_POST["subject4"];
    $conn = new mysqli($servername,$username,$password,$dbname);
    $sql = "insert into marks values('$name',$sub1,$sub2,$sub3,$sub4,0)";
    $result = $conn->query($sql);
    if($result)
    echo "The percentage obtained by ".$name." is ";
    $sum = "update marks set Total = subject1+subject2+subject3+subject4";
    $result= $conn->query($sum);
    $sum = "select total from marks where Name = '$name'";
    $result= $conn->query($sum);
    $summation = $result->fetch_assoc();// fetch_assoc - we can use either column name or index,fetch_array - use only column index. array output
    $per= $summation["total"]/400 *100;
    echo $per;
    ?>
</body>
</html>