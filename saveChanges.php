<?php

if ($_POST[prioraty]) {
    $connection = mysqli_connect('localhost', 'root', '', 'forgrant');
    mysqli_set_charset($connection, 'utf8');
    if (mysqli_connect_errno())
        echo mysqli_connect_error();
    $query = "UPDATE goods SET `period_priority`='$_POST[prioraty]';";
    $result = mysqli_query($connection, $query);
    $pricesArr = explode(",", $_POST[newPrices]);
    $i = 1;
    foreach ($pricesArr as $value) {
        echo $value;
        $query = "UPDATE goods SET `price`='$value' WHERE `period_number`=$i ;";
        $result = mysqli_query($connection, $query);
        $i++;
    }
}
?>