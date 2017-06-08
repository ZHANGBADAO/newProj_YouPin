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

	//点击分类 下拉箭头,显示更多
	let isDown_1=false;
	$("#fenLei .more_categories").click(function(){
		
		if (isDown_1==false) {
				$(this).parent().css({
					height:"90px"
				});
				$(this).find("img").css({
					transform: "rotate(180deg)"
				});
					
				isDown_1=true;
		}else{
			$(this).parent().css({
					height:"45px"
				});
				$(this).find("img").css({
					transform: "rotate(360deg)"
				});
				isDown_1=false;
		};
		
	});
	
	//点击排序 出现排序方式
	let isDown_2=false;
	$("#goods_show .sort_method").click(function(event){
		if (isDown_2==false) {
			$(this).children("ul").css({height:"auto"});
			$(this).children("img").css({transform:"rotate(180deg)"});
			isDown_2=true;
		}else{
			$(this).children("ul").css({height:"33px"});
			$(this).children("img").css({transform:"rotate(360deg)"});
			isDown_2=false;
		};
		
	});
	
	//动态添加商品
	$.get(
		"getGoodsList.php",
		function(data){
			let arr1=eval(data);
			//console.log(arr1)
			for (let i=0;i<arr1.length;i++) {
				let goodsId=arr1[i].goodsId;
				let goodsName=arr1[i].goodsName;
				let goodsType=arr1[i].goodsType;
				let goodsPrice=arr1[i].goodsPrice;
				let goodsCount=arr1[i].goodsCount;
				let goodsDesc=arr1[i].goodsDesc;
				let goodsImg=arr1[i].goodsImg;
				$("#goods_list ul").append(
					'<li><a href=""><div><img src="'+goodsImg+'" alt="" /><p></p></div><div><p>'+goodsName+'</p><p>'+goodsDesc+'</p><span>'+goodsPrice+'</span><span>¥214.00</span></div></a></li>'
					
					
				);
				
				
				
			}
		}
	);

});