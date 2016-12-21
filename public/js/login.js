$(function(){
$(".header_left").on("tap",function(){
	window.location.href="./me.html"
})
$("body").on("swipeRight",function(){
	window.location.href="./me.html"
})
var onoff=false
var key=false
$(".srk_input").on("blur",function(){
	var $tx=$("#ps_name").val()
	var $px=$("#ps_key").val()
	var z=/^1[358][0-9]{9}$/
	var k=/^[0-9A-Za-z]{6,20}$/
	if(z.test($tx) && k.test($px)){
		$(".btn_denglu").addClass('btn_active')
		$(".btn_denglu").attr("disabled",true)
	}else{
		$(".btn_denglu").removeClass('btn_active')
		$(".btn_denglu").attr("disabled","disabled")
	}
})
$(".zhuce_left").on("tap",function(){
	window.location.href="./zhucetianxie.html"
})
$(".zhuce_right").on("tap",function(){
	window.location.href="./wangjimima.html"
})
$(".btn_denglu").on("tap",function(){
	if($(this).hasClass('btn_active')){
	window.location.href="./me_denglu.html"
}
})
})