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

	//获取购物车里面的商品列表

	let cookie_vipName = getCookie("userName");
	//	alert(cookie_vipName);
	$.get(
		"getShoppingCart.php", {
			vipName: cookie_vipName
		},
		function(data) {
			//			console.log(data);
			let result = eval(data); //解析数组
			for(let i in result) { //循环显示每个商品

				$(".buy_lists").append(
					'<ul class="clear"><li><input type="checkbox" name="check" id="check" value="" checked="true" /></li><li class="li2"><dl><dt><a href=""><img src="' + result[i].goodsImg + '" alt="" /></a></dt><dd><h4>' + result[i].goodsName + '</h4><span>颜色：钢铁侠MARK44反浩克头盔</span><p>品牌商发货.    商品编号:<b class="goodsId">' + result[i].goodsId + '</b></p></dd></dl></li><li><span>￥<b class="danJia">' + result[i].goodsPrice + '</b>.00</span></li><li><input type="button" name="reduce" class="reduce" value="-" /><input type="text" name="count" class="count" value="' + result[i].goodsSum + '" /><input type="button" name="add" class="add" value="+" /></li><li><span class="xiaoJi">￥' + parseInt(result[i].goodsPrice) * parseInt(result[i].goodsSum) + '.00</span></li><li><b class="delete"></b></li></ul>'
				);
			}
		}
	);

	//修改购物车里面的商品数量
	$(".buy_lists").on("click", ".add", function() {
		let count = $(this).prev().val();
		let new_count = parseInt(count) + 1;
		$(this).prev().val(new_count);
		let danJia = parseInt($(this).parentsUntil(".buy_lists").find(".danJia").html()); //获取页面商品的单价
		$(this).parentsUntil(".buy_lists").find(".xiaoJi").html(danJia * new_count); //修改小计
		//修改后台商品的数量
		$.get(
			"updateGoodsCount.php", {
				vipName: cookie_vipName,
				goodsId: $(this).parent().prevAll(".li2").find(".goodsId").html(),
				goodsCount: new_count
			},
			function(data) {
				/*if (data==1) {
					alert("修改成功");
				}else{
					alert("修改失败");
				}*/
			}
		);
	});
	//减 数量
	$(".buy_lists").on("click", ".reduce", function() {
		let count = $(this).next().val();
		let new_count = parseInt(count) - 1;
		$(this).next().val(new_count);
		let danJia = parseInt($(this).parentsUntil(".buy_lists").find(".danJia").html()); //获取页面商品的单价
		$(this).parentsUntil(".buy_lists").find(".xiaoJi").html(danJia * new_count); //修改小计
		//修改后台商品的数量
		$.get(
			"updateGoodsCount.php", {
				vipName: cookie_vipName,
				goodsId: $(this).parent().prevAll(".li2").find(".goodsId").html(),
				goodsCount: new_count
			},
			function(data) {
				/*if (data==1) {
					alert("修改成功");
				}else{
					alert("修改失败");
				}*/
			}
		);
	});

	//删除购物车里的商品
	$(".buy_lists").on("click", ".delete", function() {
		$.get(
			"deleteGoods.php", {
				vipName: cookie_vipName,
				goodsId: $(this).parent().prevAll(".li2").find(".goodsId").html()
			},
			function(data) {
				if(data == 1) {
					alert("删除成功");
//删除对应的商品-----------------------------------
					$.get(
						"getShoppingCart.php", {
							vipName: cookie_vipName
						},
						function(data) {
							//			console.log(data);
							$(".buy_lists").empty();
							let result = eval(data); //解析数组
							for(let i in result) { //循环显示每个商品

								$(".buy_lists").append(
									'<ul class="clear"><li><input type="checkbox" name="check" id="check" value="" checked="true" /></li><li class="li2"><dl><dt><a href=""><img src="' + result[i].goodsImg + '" alt="" /></a></dt><dd><h4>' + result[i].goodsName + '</h4><span>颜色：钢铁侠MARK44反浩克头盔</span><p>品牌商发货.    商品编号:<b class="goodsId">' + result[i].goodsId + '</b></p></dd></dl></li><li><span>￥<b class="danJia">' + result[i].goodsPrice + '</b>.00</span></li><li><input type="button" name="reduce" class="reduce" value="-" /><input type="text" name="count" class="count" value="' + result[i].goodsSum + '" /><input type="button" name="add" class="add" value="+" /></li><li><span class="xiaoJi">￥' + parseInt(result[i].goodsPrice) * parseInt(result[i].goodsSum) + '.00</span></li><li><b class="delete"></b></li></ul>'
								);
							}
						}
					);
//-----------------------------------------
				} else {
					alert("删除失败");
				}
			}
		);
	});

//点击按钮图片循环显示
	let left=0;
	$("#btn_right").click(function(){//右侧按钮
		if (left==1150) {
			return;
		}else{
			left=1150;
			$("#pic_slide").animate(
				{
					left:-left+"px"
				}
			);
			
		};
	});
	$("#btn_left").click(function(){//左侧按钮
		if (left==1150) {
			left=0;
			$("#pic_slide").animate(
				{
					left:-left+"px"
				}
			);
		}else{
			return;
			
		};
	});



});