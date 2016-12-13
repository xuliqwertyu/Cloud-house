var onoff=true;
var srk_djs=document.getElementById("srk_djs")
	srk_djs.onclick=function(){
		var k=60;
		srk_djs.innerHTML=k+"s后重新获取"
		srk_djs.disabled=true;
		srk_djs.style.background="#cecece"
		var times=setInterval(function(){
			k--;
			srk_djs.innerHTML=k+"s后重新获取"
			
		if(k<=0){
			clearInterval(times)
			srk_djs.innerHTML="获取验证码"
			srk_djs.disabled=false;
		}
	},1000)
	}