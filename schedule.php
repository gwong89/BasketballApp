<?php

$dbh = new PDO('mysql:host=localhost;dbname=basketball_intra', 'root','cowultra16');
$data = file_get_contents("php://input");
$objData = json_decode($data,true);
$date = $objData['date'];
$home = $objData['home'];
$away =	$objData['away'];

$statement = $dbh->prepare("INSERT INTO Game (Date, Home, Away,home_score,away_score) VALUES (:date,:home,:away,0, 0)");


$statement->bindParam(':date',$date);
$statement->bindParam(':home',$home);
$statement->binfParam(':away',$away);	
$statement->execute();



$statement = null;	

?>