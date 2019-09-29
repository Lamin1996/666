<?php

# 001-先加载JSON数据
$json = file_get_contents("../json/dataf.json");
# 002-把JSON数据转换为PHP数组
$arrData = json_decode($json,true);

# 003-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","test");

# 004-遍历数组获取数组中每个元素
for($i = 0;$i<count($arrData);$i++)
{
  $src = $arrData[$i]["src"];
  // $text1 = $arrData[$i]["text1"];
  // $text2 = $arrData[$i]["text2"];
  // $priceB = $arrData[$i]["priceB"];
  // $priceC = $arrData[$i]["priceC"];
  $sql = "INSERT INTO `dataf` (`id`, `src`) 
VALUES (NULL, '$src');";
  mysqli_query($db, $sql);
}

// $sql = "INSERT INTO `dataa` (`id`, `src`, `name`, `priceA`, `priceB`, `priceC`) 
// VALUES (NULL, '$src', '$name', $priceA, '$priceB', '$priceC');";
?>