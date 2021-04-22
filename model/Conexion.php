<?php
   $db_host = "localhost:3306";
   $db_user = "root";
   $db_pass = "160620";
   $db_name = "test";

   $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

   if(!$conn){
      echo "ERROR !!!!";
   }  
?>