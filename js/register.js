//jquery代码
$(function() {

	//	搜索框特效
	$("#search_word").click(function() { //点击事件,出现下拉框
		$(this).animate({
			width: "250px"
		}, 500, function() {
			$("#hot_list").css({
				display: "block"
			});
		});

	});
	$("#search_word").blur(function() { //失去焦点事件,隐藏下拉框

		$(this).animate({
			width: "170px"
		}, 500);
		$("#hot_list").css({
			display: "none"
		});
	});

	//二级菜单特效
	$("nav .margin ul li:nth-child(3)").mouseenter(function() {
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(3)").mouseleave(function() {
		$(this).children("ul").slideUp(500);
	});
	$("nav .margin ul li:nth-child(4)").mouseenter(function() {
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(4)").mouseleave(function() {
		$(this).children("ul").slideUp(500);
	});
	$("nav .margin ul li:nth-child(5)").mouseenter(function() {
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(5)").mouseleave(function() {
		$(this).children("ul").slideUp(500);
	});

	//页面向下滚动,固定导航栏
	$(window).scroll(function() {
		let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop >= 71) {
			$("nav").css({
				position: "fixed",
				top: "0",
				"z-index": "1000",
				width: "100%"
			});
		} else {
			$("nav").css({
				position: "relative",
				"z-index": "5"
			});
		}

	});

	//登陆验证
	//账户名验证
	$("#userName").focus(function() { //获取焦点 边框变色
		$(this).css({
			borderColor: "#9e9"
		});
	});
	$("#userName").blur(function() { //失去焦点检查 用户名是否合法
		if($(this).val() == "") { //判断是否为空
			$(this).prev().html("请输入账户名!");
			$(this).prev().css({
				color: "#f44"
			});
			$(this).css({
				borderColor: "#f44"
			});
		} else {
			$(this).prev().html("");
			$(this).css({
				borderColor: "#000"
			});
		};

	});
	//密码验证
	$("#userPass").focus(function() { //获取焦点 边框变色
		$(this).css({
			borderColor: "#9e9"
		});
	});
	$("#userPass").blur(function() { //失去焦点检查 密码是否合法
		if($(this).val() == "") { //判断是否为空
			$(this).prev().html("请输入密码!");
			$(this).prev().css({
				color: "#f44"
			});
			$(this).css({
				borderColor: "#f44"
			});
		} else {
			$(this).prev().html("");
			$(this).css({
				borderColor: "#000"
			});
		};

	});

	//点击登陆按钮 在数据库查询是否存在用户名和密码
	$("#submit").click(function() {
		//console.log($("#userName").val());
		//console.log($("#userPass").val());

		if($("#userName").val() == "" || $("#userPass").val() == "") {
			alert("请输入用户名,密码,验证码");
		} else {

			$.post(
				"php/login.php", {
					userName: $("#userName").val(),
					userPass: $("#userPass").val()
				},
				function(data) {
					if(data == "true") {
						location.href = "index.html";
						//保存cookie
						saveCookie("userName", $("#userName").val(), 1);
						saveCookie("userPass", $("#userPass").val(), 1);

					} else {
						//账户名附近 出现错误提示
						$("#userName").prev().html("账户名或密码错误!");
						$("#userName").prev().css({
							color: "#f44"
						});
						$("#userName").css({
							borderColor: "#f44"
						});
						//密码附近 出现错误提示
						$("#userPass").prev().html("账户名或密码错误!");
						$("#userPass").prev().css({
							color: "#f44"
						});
						$("#userPass").css({
							borderColor: "#f44"
						});
					}
				}
			);
		};
	});

});