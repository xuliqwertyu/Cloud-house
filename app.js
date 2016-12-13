var path =require('path');
var express =require('express');
var app=express();
var viewsPath=path.join(__dirname,'views');
app.use('/',express.static(viewsPath));
var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
app.listen(7777,function(){
	console.log('server run at port 7777');
})

module.exports=app;