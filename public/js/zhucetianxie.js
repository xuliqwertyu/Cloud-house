$(function(){
var srk_xiamenu=document.getElementById("srk_xiamenu")
var xia_ul=document.getElementById("xia_ul")
		srk_xiamenu.onclick=function(){	
		if(onoff==true){
			srk_xiamenu.style.background="url(../public/img/nav_back_icon@2shang.png) no-repeat center"
			srk_xiamenu.style.backgroundSize="100%"
			xia_ul.style.display="block"
			onoff=false
		}else{
			srk_xiamenu.style.background="url(../public/img/nav_back_icon@2xia.png) no-repeat center"
			srk_xiamenu.style.backgroundSize="100%"
			xia_ul.style.display="none"
			onoff=true
		}

		}
$("body").on("swipeRight",function(){
	window.location.href="./login.html"
})
$(".header_left").on("tap",function(){
	window.location.href="./login.html"
})		
$("#xia_ul li").on("tap",function(){
	var $t=$(this).text()
	$("#input_type").val($t)
	$("#xia_ul").hide()
	srk_xiamenu.style.background="url(../public/img/nav_back_icon@2xia.png) no-repeat center"
	srk_xiamenu.style.backgroundSize="100%"
	onoff=true
})
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
$(".btn_zhuce").on("tap",function(){
	if($(this).hasClass("btn_active")){
		window.location.href="./dlswanshan.html"
	}
})
})