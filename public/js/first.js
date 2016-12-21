$ (function(){
	var lbtwidth=$(window).width();
	var lbt_pic=$(".lbt_pic");
	var first_lbt_box=$(".first_lbt_box");
	var lbt_dian=$(".lbt_dian");
	var lbtheight=lbtwidth*0.85;
	var Now=0;
	var lg=lbt_pic.length;
	var k=0;
	var slideTime;
	$(".lbt_pic").width(lbtwidth)
	$(".lbt_pic").height(lbtheight)
	$(".first_lbt_box").width(lbtwidth*lg)
	$(".first_lbt_box").height(lbtheight)

startTimeout();
	$(".first_lbt_box").on("swipeLeft",function(){
		clearTimeout(slideTime);
		if(Now<lg){
			var swipewidth=lbtwidth;
			$(".first_lbt_box").animate({
				"margin-left": -swipewidth
			},800,'ease',function(){
			if(Now<lg-1){
				Now++
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
			
			}else{
				Now=0
				lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
			}
			$(".lbt_pic").eq(0).appendTo($(".first_lbt_box"))
			$(".first_lbt_box").css("margin-left",0);
		});
		}
		$(".lbt_pic").eq(0).css("opacity","1").animate({
				"opacity": 0
			},2000,'ease')
		$(".lbt_pic").eq(1).css("opacity","0").animate({
				"opacity": 1
			},2000,'ease')
		startTimeout();
	})
	$(".first_lbt_box").on("swipeRight",function(){
		clearTimeout(slideTime);
		$(".lbt_pic").eq(lg-1).prependTo($(".first_lbt_box"))
		$(".first_lbt_box").css("margin-left",-lbtwidth+'px');	
		$(".first_lbt_box").animate({
			"margin-left": 0
		},800,'ease',function(){
			if(Now>0){
		 		Now--
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
			
		 	}else{
		 		Now=lg-1
		 		lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
		 	}
		});	
		$(".lbt_pic").eq(1).css("opacity","1").animate({
				"opacity": 0
			},2000,'ease')
		$(".lbt_pic").eq(0).css("opacity","0").animate({
				"opacity": 1
			},2000,'ease')
		
		 startTimeout();
	})
	function startTimeout(){
		slideTime = setTimeout(function(){
			autolb();
			startTimeout();
		}, 5000)
	}
	function autolb(){
			$(".lbt_pic").css("opacity","1")
			var swipewidth=lbtwidth;
			$(".first_lbt_box").animate({
				"margin-left": -swipewidth
			},800,'ease',function(){
			if(Now<lg-1){
				Now++
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
			
			}else{
				Now=0
				lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
			}
			$(".lbt_pic").eq(0).appendTo($(".first_lbt_box"))
			$(".first_lbt_box").css("margin-left",0);
		})
		}
	
	
	var onoff=true;
	$(".first_option").on("tap",function(){
		if($(this).hasClass('first_option_active')){
			$(".first_option").removeClass("first_option_active")
			$(".first_option_option").animate({
				height: '0px'
			})

			onoff=true;
			$(".position_box").removeClass("position_box_active")
		}else{
			var b=$(this).index()
			$(".first_option").removeClass("first_option_active")
			$(".first_option_option").animate({
				height: '0'
			})
			$(this).addClass("first_option_active")
			$(".first_option_option").eq(b).animate({
				height: '300px'
			})
			$(".first_lbt_bg").addClass("first_lbt_bg_change")
			$(".first_top").addClass("first_top_change")
			$(".first_head").hide()
			$(".first_name").hide()
			$(".first_top_search").addClass("first_top_search_change")
			$(".first_top_area").addClass("first_top_area_change")
			$(".first_option_box").addClass("first_option_box_change")
			$(".first_option_option").addClass("first_option_option_change")
			$(".first_lbt_box").hide()
			$(".first_lbt_bg").addClass("first_lbt_bg_change")
			onoff=false;
			$(".position_box").addClass("position_box_active")
		}

	})
	$(".first_sort").on("tap",function(){
		if(!$(this).hasClass("first_sort_down") && !$(this).hasClass("first_sort_up") && onoff==false){
			$(this).addClass("first_sort_down")
		}else if($(this).hasClass("first_sort_down")){
			$(this).removeClass("first_sort_down")
			$(this).addClass("first_sort_up")
		}else if($(this).hasClass("first_sort_up")){
			$(this).removeClass("first_sort_up")
		}
	})
	$(".content_collection").on("tap",function(){
		if(!$(this).hasClass("content_collection_active")){
			$(this).addClass("content_collection_active")
		}else{
			$(this).removeClass("content_collection_active")
		}
	})
	
	$(window).on('scroll', function(){
		var top=window.scrollY
		if(top>lbtheight/2 && !$(".first_lbt_bg").hasClass("first_lbt_bg_change")){
			$(".first_lbt_bg").addClass("first_lbt_bg_change")
			$(".first_top").addClass("first_top_change")
			$(".first_head").hide()
			$(".first_name").hide()
			$(".first_top_search").addClass("first_top_search_change")
			$(".first_top_area").addClass("first_top_area_change")
			$(".first_option_box").addClass("first_option_box_change")
			$(".first_option_option").addClass("first_option_option_change")
			$(".first_lbt_box").hide()
			$(".first_lbt_bg").addClass("first_lbt_bg_change")
			$("window").scrollY=0
		}
		
	})
	$("body").on('swipeDown',function(){
		if(!$(".position_box").hasClass("position_box_active")){
			$(".first_lbt_bg").removeClass("first_lbt_bg_change")
			$(".first_top").removeClass("first_top_change")
			$(".first_head").show()
			$(".first_name").show()
			$(".first_top_search").removeClass("first_top_search_change")
			$(".first_top_area").removeClass("first_top_area_change")
			$(".first_option_box").removeClass("first_option_box_change")
			$(".first_option_option").removeClass("first_option_option_change")
			$(".first_lbt_box").show()
			$(".first_lbt_bg").removeClass("first_lbt_bg_change")
		}
		})
	$(".mianji li").on('tap',function(){
		$(".mianji").css("height","0")
		$(".first_option").removeClass("first_option_active")
		$(".position_box").removeClass("position_box_active")
	})
	$(".danjia li").on('tap',function(){
		$(".danjia").css("height","0")
		$(".first_option").removeClass("first_option_active")
		$(".position_box").removeClass("position_box_active")
	})
	$(".select_quyu").on('tap',function(){
		var i=$(this).index()
		$(".select_diming_box").eq(i).css("display","block")
	})
	$(".select_diming").on('tap',function(){
		$(".quyu").css("height","0")
		$(".first_option").removeClass("first_option_active")
		$(".position_box").removeClass("position_box_active")
	})
	$(".search_box").on("tap",function(){
		window.location.href="./search.html"
	})

})


