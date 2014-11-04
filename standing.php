<?php

$dbh = new PDO('mysql:host=localhost;dbname=basketball_intra', 'root','cowultra16');
$statement = $dbh->prepare("SELECT `Name`, `Wins`, `Losess` FROM `Teams` WHERE 1 ORDER BY `Teams`.`Wins` DESC");
$statement->execute();

$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo($json);

$statement = null;	

?>