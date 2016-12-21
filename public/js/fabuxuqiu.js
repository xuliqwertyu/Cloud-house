$(function(){
	$(".fabu_quxiao").on("tap",function(){
		window.history.back()
	})
	$(".fabu").on("tap",function(){
		$(".bd_black").show()
		$(".wancheng_box").show()

	})
	$(".wancheng_queren").on("tap",function(){
		window.location.href="./xinxi_xuqiu.html"
	})
	$(".wancheng_quxiao").on("tap",function(){
		$(".bd_black").hide()
		$(".wancheng_box").hide()

	})

})