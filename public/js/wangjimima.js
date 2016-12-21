$(function(){
	$(".srk_input").on("blur",function(){
	var $tx=$("#ps_name").val()
	var $px=$("#ps_key").val()
	var $rx=$("#ps_rkey").val()
	var z=/^1[358][0-9]{9}$/
	var k=/^[0-9A-Za-z]{6,20}$/
	if(z.test($tx) && k.test($px) && $(".srk_input")!="" &&k.test($rx)){
		$(".btn_zhuce").addClass('btn_active')
		$(".btn_zhuce").attr("disabled",true)
	}else{
		$(".btn_zhuce").removeClass('btn_active')
		$(".btn_zhuce").attr("disabled","disabled")
	}
})
$(".header_left").on("tap",function(){
	window.location.href="./login.html"
})
$("body").on("swipeRight",function(){
	window.location.href="./login.html"
})

})