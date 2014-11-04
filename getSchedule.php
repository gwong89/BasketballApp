<?php

$dbh = new PDO('mysql:host=localhost;dbname=basketball_intra', 'root','cowultra16');
$statement = $dbh->prepare("SELECT * FROM `Game` ORDER BY `Date` ASC
");
$statement->execute();

$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo($json);

$statement = null;	

?>