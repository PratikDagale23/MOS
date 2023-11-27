//http://localhost/Web tech/formresult.php
<?php 
    header("Access-Control-Allow-Origin:*");
     
    $servername="localhost";
$username="root";
$password="";
$dbname="form";

$conn=new mysqli($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    ?>
<?php

function calculate_total($cnmidsem,$wtmidsem,$daamidsem,$sdmmidsem,$edimidsem,
$cnendsem,$wtendsem,$daaendsem,$sdmendsem,$ediendsem)
{
    
    $cnmidsem=$cnmidsem*0.30;
    $wtmidsem=$wtmidsem*0.30;
    $daamidsem=$daamidsem*0.30;
    $sdmmidsem=$sdmmidsem*0.30;
    $edimidsem=$edimidsem*0.30;

    
   
    $cnendsem=$cnendsem*0.70;
    $wtendsem=$wtendsem*0.70;
    $daaendsem=$daaendsem*0.70;
    $sdmendsem=$sdmendsem*0.70;
    $ediendsem=$ediendsem*0.70;    

    $cntotal=$cnmidsem+$cnendsem;
    $wttotal=$wtmidsem+$wtendsem;
    $daatotal=$daamidsem+$daaendsem;
    $sdmtotal=$sdmmidsem+$sdmendsem;
    $editotal=$edimidsem+$ediendsem;

    $total_marks=$cntotal+$wttotal+$daatotal+$sdmtotal+$editotal;
    return $total_marks;
}
function calculate_cgpa($total_marks)
{
    $cgpa=(($total_marks/5)+7.5)/10;
    return number_format((float)$cgpa,2,".","");
}
?>
<?php

    $name1=$_POST['name1'];
    $cnmidsem=$_POST['cnmidsem'];
    $wtmidsem=$_POST['wtmidsem'];
    $daamidsem=$_POST['daamidsem'];
    $sdmmidsem=$_POST['sdmmidsem'];
    $edimidsem=$_POST['edimidsem'];

    $cnendsem=$_POST['cnendsem'];
    $wtendsem=$_POST['wtendsem'];
    $daaendsem=$_POST['daaendsem'];
    $sdmendsem=$_POST['sdmendsem'];
    $ediendsem=$_POST['ediendsem'];


    $total=calculate_total($cnmidsem,$wtmidsem,$daamidsem,$sdmmidsem,$edimidsem,
    $cnendsem,$wtendsem,$daaendsem,$sdmendsem,$ediendsem);
    $cgpa=calculate_cgpa($total);    
    $result="CGPA is ".$cgpa;

    $sql="INSERT INTO react_result (name1,cnmidsem,wtmidsem,daamidsem,sdmmidsem,edimidsem,
    cnendsem,wtendsem,daaendsem,sdmendsem,ediendsem,total,cgpa) VALUES('$name1','$cnmidsem','$wtmidsem','$daamidsem','$sdmmidsem','$edimidsem',
    '$cnendsem','$wtendsem','$daaendsem','$sdmendsem','$ediendsem','$total','$cgpa')";
    if($conn->query($sql) === TRUE)
    {
        echo $result;
    }    
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();

?>

