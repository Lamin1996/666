<?php

$con = mysqli_connect("127.0.0.1", "root", "", "test");
$sql = "SELECT car.*,data_liebiao.title,data_liebiao.src FROM car , data_liebiao WHERE car.goodid = data_liebiao.goodid";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>