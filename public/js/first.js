$ (function(){
	var lbtwidth=$(window).width();
	var lbt_pic=$(".lbt_pic");
	var first_lbt_box=$(".first_lbt_box");
	var lbt_dian=$(".lbt_dian");
	var lbtheight=lbtwidth*0.85;
	var Now=0;
	var lg=lbt_pic.length;
	var first_option=$(".first_option");
	$(".lbt_pic").width(lbtwidth)
	$(".lbt_pic").height(lbtheight)
	$(".first_lbt_box").width(lbtwidth*lg)
	$(".first_lbt_box").height(lbtheight)
	$(".first_lbt_box").on("swipeLeft",function(){
		clearTimeout(slideTime);
		if(Now<lg-1){
			var swipewidth=(++Now)*lbtwidth;
			first_lbt_box.css("transform","translateX(-"+swipewidth+"px)");
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
		}else{
			Now=lg-1
			first_lbt_box.css("transform","translateX(-"+swipewidth+"px)");
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
		}
		autolb();
	})
	$(".first_lbt_box").on("swipeRight",function(){
		clearTimeout(slideTime);
		if(Now>0){
			var swipewidth=(--Now)*lbtwidth;
			first_lbt_box.css("transform","translateX(-"+swipewidth+"px)");
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
		}else{
			Now=0
			first_lbt_box.css("transform","translateX(-"+swipewidth+"px)");
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")
		}
		autolb();
	})
	function autolb(){
		slideTime=setTimeout(function(){
			if(Now<lg-1){
			var swipewidth=(++Now)*lbtwidth;
			first_lbt_box.css("transform","translateX(-"+swipewidth+"px)");
			lbt_dian.removeClass("lbt_active").eq(Now).addClass("lbt_active")	
			autolb();
		}
		},2000)

	}
	autolb();

	first_option.on("tap",function(){
		if(this.hasClass(""))
	})
})