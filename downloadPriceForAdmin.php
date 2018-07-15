<?php

include_once "connection.php";
$query = "(SELECT * FROM `goods`);";
$result = mysqli_query($connection, $query);
$rows = array();

while ($r = mysqli_fetch_assoc($result)) {

    $rows[] = $r;
}
if (count($rows) == 0)
    return false;
else
    print json_encode($rows);
?>