$(function() {
	//导航栏
	//产品
	$(".nav-product").on("mouseover", function() {
		$(".nav-product div").css({
			"border-top": "6px solid greenyellow"
		});
		$(".product").css({
			"height": "300px",
			"border-bottom": "1px solid #e4e4e4"
		});
	});

	$(".nav-product").on("mouseout", function() {
		$(".nav-product div").css({
			"border-top": ""
		});
		$(".product").css({
			"height": "",
			"border-bottom": ""
		});
	});

	//帮助中心
	$(".nav-help").on("mouseover", function() {
		$(".nav-help div").css({
			"border-top": "6px solid greenyellow"
		});
		$(".help").css({
			"height": "300px",
			"border-bottom": "1px solid #e4e4e4"
		});
	});
	$(".nav-help").on("mouseout", function() {
		$(".nav-help div").css({
			"border-top": ""
		});
		$(".help").css({
			"height": "",
			"border-bottom": ""
		});
	});

	//合作
	$(".nav-cooperation").on("mouseover", function() {
		$(".nav-cooperation div").css({
			"border-top": "6px solid greenyellow"
		});
		$(".cooperation").css({
			"height": "300px",
			"border-bottom": "1px solid #e4e4e4"
		});
	});
	$(".nav-cooperation").on("mouseout", function() {
		$(".nav-cooperation div").css({
			"border-top": ""
		});
		$(".cooperation").css({
			"height": "",
			"border-bottom": ""
		});
	});

	//下拉菜单
	$(".expand").on("mouseover", function() {
		$(this).css({
			"height": "300px",
			"border-bottom": "1px solid #e4e4e4"
		})
	});
	$(".expand").on("mouseout", function() {
		$(this).css({
			"height": "",
			"border-bottom": "none"
		})
	});

	//语言
	$(".nav-language").on("mouseover", function() {
		$(".nav-language div").css({
			"border-top": "6px solid greenyellow"
		});
		$(".language").css({
			"height": "114px",
			"border-bottom": "1px solid #e4e4e4"
		});
	});
	$(".nav-language").on("mouseout", function() {
		$(".nav-language div").css({
			"border-top": ""
		});
		$(".language").css({
			"height": "",
			"border-bottom": ""
		});
	});

	//登录
	$(".nav-login").on("mouseover", function() {
		$(".nav-login div").css({
			"border-top": "6px solid greenyellow"
		});
		$(".login").css({
			"height": "114px",
			"border-bottom": "1px solid #e4e4e4"
		});
	});
	$(".nav-login").on("mouseout", function() {
		$(".nav-login div").css({
			"border-top": ""
		});
		$(".login").css({
			"height": "",
			"border-bottom": ""
		});
	});

	$(".navlast").on("mouseover", function() {
		$(this).css({
			"height": "114px",
			"border-bottom": "1px solid #e4e4e4"
		})
	});
	$(".navlast").on("mouseout", function() {
		$(this).css({
			"height": "",
			"border-bottom": "none"
		})
	});
	//max-width:960px
	$(".nav-button").on("click", function() {
		$("#nav").slideToggle();
		$("#nav").css({
			"border-bottom": "1px solid #e4e4e4"
		})
	})

	var navTxts = document.querySelectorAll(".navtxt");
	for(var i = 0; i < navTxts.length; i++) {
		navTxts[i].onmouseover = function() {
			$(this).prev().animate({
				"opacity": "0.4"
			});
		}
		navTxts[i].onmouseout = function() {
			$(this).prev().animate({
				"opacity": ""
			});
		}
	}

	var aEmail = document.querySelector(".email");
	$(".emailbtn").on("click", function() {
		var re = /^\w+@[a-z0-9]{2,6}(\.[a-z]{2,6}){1,4}$/;
		var re2 = /^\s+|\s+$/g;
		aEmail.value = aEmail.value.replace(re2, "");
		if(re.test(aEmail.value)) {
			return true;
		} else {
			//alert('请输入正确的邮箱信息');
			aEmail.value = "";
			$(".emailalert").slideDown("slow");
			setTimeout(function() {
				$(".emailalert").slideUp("slow");
			}, 2000);
		}
	});

	var oBgs = document.querySelectorAll(".contwo-one");
	for(var i = 0; i < oBgs.length; i++) {
		oBgs[i].onmouseover = function() {
			$(this).prev().animate({
				"opacity": "0.5"
			});
		}
		oBgs[i].onmouseout = function() {
			$(this).prev().animate({
				"opacity": ""
			});
		}
	}
});