$(function(){
	var $w=$(window).width()
	var $h=$(window).height()
	$(".yuyue_each_box").width($w)
	$(".yuyue_content_box").height($h-91)

	$(".yuyue_bgbox").on("swipeLeft",function(){
		if($(this).css("margin-left") === "0px"){
			$(".yuyue_bgbox").animate({"margin-left":"0px"},200,"ease")
			$(this).animate({"margin-left":"-66px"},200,"ease")
			var del=$(this).index()
		}
	})
	$(".yuyue_bgbox").on("swipeRight",function(){
		$(this).animate({"margin-left":"0px"},200,"ease")
	})
	$(".yuyue_delete").on("tap",function(){
		$(this).parent().remove()
	})
	$(".jiedan_btn").on("tap",function(){
		$(this).hide()
		$(this).next().show()
		setTimeout(function(){
			window.location.href="./dingdanxiangqing.html"
		},2000)
	})
	$(".yuyue_each_tx").on("tap",function(){
		window.location.href="./yuyuexiangqing.html"
	})
})
