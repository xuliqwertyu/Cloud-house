$(function(){
$(".me_pic_box").on("tap",function(){
	window.location.href="./login.html"
})
$("body").on("swipeRight",function(){
		window.history.back()
	})
})