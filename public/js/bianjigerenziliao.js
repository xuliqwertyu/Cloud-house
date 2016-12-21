$(function(){
	$("body").on("swipeRight",function(){
		window.history.back()
	})
	$(".header_left").on("tap",function(){
		window.history.back()
	})
})