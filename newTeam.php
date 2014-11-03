<?php

$dbh = new PDO('mysql:host=localhost;dbname=basketball_intra', 'root','cowultra16');
$data = file_get_contents("php://input");

$objData = json_decode($data,true);
$teamName = $objData['name'];
$result = $dbh->prepare("INSERT INTO Teams (Name, Wins, Losess) VALUES (:name, 0, 0)");
$result->bindParam(':name',$teamName);
$result->execute();

$result = null;	

	
?>