<?php

$connection = mysqli_connect('localhost', 'root', '', 'forgrant');
mysqli_set_charset($connection, 'utf8');
if (mysqli_connect_errno())
    echo mysqli_connect_error();
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