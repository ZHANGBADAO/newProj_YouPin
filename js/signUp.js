
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

	//注册验证--------------------------
	//账户名验证
	$("#userName").focus(function() { //获取焦点 边框变色
		$(this).css({
			borderColor: "#6c6"
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
		};
		//正则验证 用户名
		let reg_userName=/^[a-zA-Z_]\w{5,14}$/;
		if (reg_userName.test($(this).val())) {
			$(this).prev().html("格式正确!");
			$(this).prev().css({
				color: "#6c6"
			});
		}else{
			$(this).prev().html("账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间!");
			$(this).prev().css({
				color: "#f44"
			});
			$(this).css({
				borderColor: "#f44"
			});
		}

	});
	//密码验证
	$("#userPass").focus(function() { //获取焦点 边框变色
		$(this).css({
			borderColor: "#6c6"
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
		}else{
			let reg_userPass=/^[a-zA-Z_]\w{5,14}$/;
			if (reg_userPass.test($(this).val())) {
				$(this).prev().html("格式正确!");
				$(this).prev().css({
					color: "#6c6"
				});
			}else{
				$(this).prev().html("密码只能使用数字字母下划线，且数字不能开头，长度在6-15之间!");
				$(this).prev().css({
					color: "#f44"
				});
				$(this).css({
					borderColor: "#f44"
				});
			};
		};

	});

	//点击登陆按钮 在数据库查询是否存在用户名和密码
	$("#submit").click(function() {
		//console.log($("#userName").val());
		//console.log($("#userPass").val());
		$.post(
			"php/signUp.php", {
				userName: $("#userName").val(),
				userPass: $("#userPass").val()
			},
			function(data) {
				if(data == "true") {
					alert("已被注册");
					
//					location.href = "index.html";
				} else {
					
					alert("注册成功");
					/*//账户名附近 出现错误提示
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
					});*/
				}
			}
		);

	});

});