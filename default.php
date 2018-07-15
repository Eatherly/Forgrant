<?php

include_once "connection.php";
if (mysqli_connect_errno())
    echo mysqli_connect_error();
$query = "SELECT `price` FROM `goods` WHERE `id`=1;";
$result = mysqli_query($connection, $query);
print( mysqli_fetch_assoc($result)[price]);
?>