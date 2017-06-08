//jquery代码
$(function() {

	//轮播图
	new Slideshow({
		boxId: "#LunBoTu",
		imgs: ["img/big01.jpg", "img/big02.png", "img/big03.jpg"],
		width: 1150,
		height: 575,
		timeSpace: 2000,
		fadeInOutTime: 1000,
		/*currInOrd:1,
		currOutOrd:0,*/
		btnColor: "#444",
		btnHighColor: "#fff",
		btnWidth: 10,
		btnHeight: 10,
		btnHasOrd: false
	});

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
	$("nav .margin ul li:nth-child(3)").mouseenter(function(){
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(3)").mouseleave(function(){
		$(this).children("ul").slideUp(500);
	});
	$("nav .margin ul li:nth-child(4)").mouseenter(function(){
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(4)").mouseleave(function(){
		$(this).children("ul").slideUp(500);
	});
	$("nav .margin ul li:nth-child(5)").mouseenter(function(){
		$(this).children("ul").slideDown(500);
	});
	$("nav .margin ul li:nth-child(5)").mouseleave(function(){
		$(this).children("ul").slideUp(500);
	});
	
	//页面向下滚动,固定导航栏
	$(window).scroll(function(){
		let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop>=71) {
			$("nav").css({position:"fixed",top:"0","z-index":"1000",width:"100%"});
		}else{
			$("nav").css({position:"relative","z-index":"5"});
		}
		
		//向下滚动 显示 返回顶部按钮
		if (scrolltop>=600) {
			$("#back_top").css({display:"block"});
			
		}else{
			$("#back_top").css({display:"none"});
		}
	});
	
	$("#back_top").click(function(){
		window.scrollTo(0,0);
	});
	
	//读取cookie
	
	let saved_cookie=getCookie("userName");
	if (saved_cookie!="") {
		$("#display_userName").children("span").html(saved_cookie);
		//alert(saved_cookie);
	};
	
});