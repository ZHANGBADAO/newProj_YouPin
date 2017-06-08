<?php
	header("Content-type","text/html;charset=utf-8");
	
	//1 接收前端数据(用户名和密码)
	$userName = $_POST['userName'];
	$userPass= $_POST['userPass'];
	//2 搭桥 与数据库sql链接
	$connect = mysql_connect("localhost:3306","root","qianfeng");
	if (!$connect){
		die('Could not connect: ' . mysql_error());
	};

	//3 选择数据库
	mysql_select_db("project_youpin",$connect);
	//4 执行sql语句
		//执行select查询语句
	$sqlStr = "select * from userInfo where userName='".$userName."' and userPass='".$userPass."'";
	
	$result = mysql_query($sqlStr,$connect);
	$rows = mysql_num_rows($result);
	
	
	if($rows==0){
		
		//执行insert插入语句
		$sql_insert="insert into userInfo (userName,userPass) values ('".$userName."','".$userPass."')";
		mysql_query($sql_insert,$connect);
		//关闭数据库
		mysql_close($connect);
		echo "false";
	}else{
		echo "true";
	};




?>