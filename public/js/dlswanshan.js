$(function(){
	$("body").on("swipeRight",function(){
		window.history.back()
	})
	$(".header_left").on("tap",function(){
		window.history.back()
	})
	$(".dls_wc").on("tap",function(){
		window.location.href="./me.html"
	})
})