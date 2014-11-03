<?php
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!

mysql_connect("localhost", "root", "cowultra16") or die(mysql_error());
mysql_select_db("basketball_intra") or die(mysql_error());

$data = file_get_contents("php://input");

$objData = json_decode($data);
$stmt = $dbh->prepare("INSERT INTO basketball_intra.Teams (Name, Wins, Losess) VALUES ($objData, 0, 0)");
// perform query or whatever you wish, sample:

/*
$query = 'SELECT * FROM
tbl_content
WHERE
title="'. $objData->data .'"';
*/
?>