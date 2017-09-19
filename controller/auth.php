<?php
session_start();
if(!isset($_SESSION["authorize"])){
header("Location: login.php");
exit(); }
?>
