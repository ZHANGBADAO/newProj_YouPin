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

	//放大镜
	$("#small_box").mirror({
		smallBoxId: "#small_box",                      
		smallImgId: "#small_box_img",                      
		imgPath: "img/iron_man/bc07bc85fbbef925477849f6f8fb341f.jpg",                  
		
		baseLeft: 0,    //图片容器初始的left                    
		baseTop: 0,     //图片容器初始的top                    
		baseWidth: 400,    //图片容器的width                
		baseHeight: 400,  //图片容器的height                    
		mirrorWidth: 100,                     
		mirrorHeight: 100,                    
		multiple: 5,
		position:"右"
	});
	//鼠标点击 左右按钮 小图滚动
	let left=0;
	$("#btn_right").click(function(){
		if (left==-400) {
			return;
		};
		left=left-100;
		$(".thumb_list").css({
			left:left+"px"
		});
	});
	$("#btn_left").click(function(){
		if (left==400) {
			return;
		};
		if (left==0) {
			return;
		};
		left=left+100;
		$(".thumb_list").css({
			left:left+"px"
		});
		
	});
	//点击小图 切换大图
	$(".thumb_list li").click(function(){
		let img_src=$(this).children("img").attr("src");
		$("#small_box_img").attr("src",img_src);
		//动态创建放大镜
			$("#small_box").mirror({
				smallBoxId: "#small_box",                      
				smallImgId: "#small_box_img",                      
				imgPath: img_src,                  
				
				baseLeft: 0,    //图片容器初始的left                    
				baseTop: 0,     //图片容器初始的top                    
				baseWidth: 400,    //图片容器的width                
				baseHeight: 400,  //图片容器的height                    
				mirrorWidth: 100,                     
				mirrorHeight: 100,                    
				multiple: 5,
				position:"右"
			});
	});
	
	//商品数量的加减
	$(".count dd span:nth-child(3)").click(function(){
		
		let i=$(".count dd input:nth-child(2)").val();
		i++;
		$(".count dd input:nth-child(2)").val(i);
	});
	$(".count dd span:nth-child(1)").click(function(){
		
		let i=$(".count dd input:nth-child(2)").val();
		if (i==0) {
			return;
		};
		i--;
		$(".count dd input:nth-child(2)").val(i);
	});
	
	//从后台获取商品详情信息
	$.get(
		"getGoodsInfo.php",
		{goodsId:"004"},
		function(data){
			let arr1=eval("("+data+")");
			$(".good_right .title").html(arr1.goodsName);
			$(".good_right .price p:first-child i").html("$"+arr1.goodsPrice);
			$("#small_box_img").attr("src",arr1.goodsImg);
			$("#goodsId").html(arr1.goodsId);
			
			
			$("#small_box").mirror({
				smallBoxId: "#small_box",                      
				smallImgId: "#small_box_img",                      
				imgPath: arr1.goodsImg,                  
				
				baseLeft: 0,    //图片容器初始的left                    
				baseTop: 0,     //图片容器初始的top                    
				baseWidth: 400,    //图片容器的width                
				baseHeight: 400,  //图片容器的height                    
				mirrorWidth: 100,                     
				mirrorHeight: 100,                    
				multiple: 5,
				position:"右"
			});
			
		}
	);
	
	//点击 购买,加入购物车
	$("#buy").click(function(){
		let cookie_vipName=getCookie("userName");
		let goodsCount=$(".count dd input").val();//从页面拿到的商品数量
		//商品加入购物车
		$.get(
			"addShoppingCart.php",
			{vipName:cookie_vipName,
			goodsId:"004",
			goodsCount:goodsCount},
			function(data){
				if (data==1) {
					alert("成功")
				};
				if (data==0) {
					alert("失败")
				};
			}
		);
		
	});
	
	
	

});