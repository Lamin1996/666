<?php
$phonenumber= $_REQUEST["phonenumber"];

$passwordQ = $_REQUEST["password"];


$db = mysqli_connect("127.0.0.1","root","","Test");
$sql = "SELECT * FROM zhuce WHERE phonenumber='$phonenumber'";


$result = mysqli_query($db,$sql);

$data = array("status"=>"error","data"=>array("msg"=>"注册失败"));

if(mysqli_num_rows($result) == "1"){
  $data["data"]["msg"] = "注册失败，该手机号已经存在";
  echo json_encode($data,true);
}else{
  $sql = "INSERT INTO `zhuce` (`id`, `phonenumber`, `password`) VALUES (NULL, '$phonenumber', '$passwordQ');";
  mysqli_query($db, $sql);
  $data["data"]["msg"] = "恭喜你，注册成功";
   $data["status"] = "success";
  echo json_encode($data, true);
}

// print_r($result);

# 获取查询结果中数据有几行
// print_r(mysqli_num_rows($result));

/* 
mysqli_result Object
(
    [current_field] => 0
    [field_count] => 4
    [lengths] => 
    [num_rows] => 1
    [type] => 0
)
查询到一行数据
*/

?>