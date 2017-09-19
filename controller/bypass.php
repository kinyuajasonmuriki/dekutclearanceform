<?php
if(isset($_POST['bypass'])){
  session_start();
  $_SESSION['authorize'] = $_POST['bypass'];
  echo json_encode(array("href"=>"index.php", "message"=>"Page Bypassed", "status"=>"Ok"));
}
?>
