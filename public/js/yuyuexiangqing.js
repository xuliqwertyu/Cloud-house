$(function(){
	$("body").on("swipeRight",function(){
		window.history.back()
	})
	$(".header_left").on("tap",function(){
		window.history.back()
	})
	$(".yuyuexiangiqng_btn").on("tap",function(){
		window.location.href="./dingdanxiangqing.html"
	})
	$(".yyr_call").on("tap",function(){
		$(".wancheng_box").show()
	})
	$(".wancheng_quxiao").on("tap",function(){
		$(".wancheng_box").hide()
	})
})