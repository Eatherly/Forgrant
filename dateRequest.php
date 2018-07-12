<?php

$connection = mysqli_connect('localhost', 'root', '', 'forgrant');
mysqli_set_charset($connection, 'utf8');
if (mysqli_connect_errno())
    echo mysqli_connect_error();
$a = strtotime($_POST[setPrice]);
$query = "(SELECT * FROM `goods` WHERE $a BETWEEN UNIX_TIMESTAMP(`start_price`)"
        . " AND UNIX_TIMESTAMP(`end_price`) ORDER BY `start_price` DESC);";
$result = mysqli_query($connection, $query);
$rows = array();
$dif = INF;
while ($r = mysqli_fetch_assoc($result)) {

    if ($r[period_priority] == "by_less") {
        if ($dif > (strtotime($r[end_price]) - strtotime($r[start_price]))) {
            $dif = strtotime($r[end_price]) - strtotime($r[start_price]);
            $rows[] = $r[price];
        }
    } else {
        $rows[] = $r[price];
    }
}
if (count($rows) == 0)
    return false;
else
    echo json_encode($rows[0]);
?>
