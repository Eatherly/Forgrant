<?php

include_once "connection.php";
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
