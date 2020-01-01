'use strict'

var url =require('url');
export.handler = function(event,context,callback){	
	
	var list = ['www.google.com',''];
	for(var i=0;i<list.length;i++){
		
		
		setTimeout(function(){ 		
		var target =list[i];
		
		var urlObject =url.parse(target);
		
		var mod = require(urlObject.substring(0,urlObject.length-1));
		var req = mod.request(urlObject,function(res){
			
			res.setEncoding('utf8');
			res.on('data',function(chunk){
				//console.log				
			});
			
			
			
			
			res.on('end',function(){
				console.log("[End] ");
				callback();
			});
			
						
		});
		
		
		
		req.on('error',function(e){			
			console.log("[Error] "+e);
			callback(e);
			
			
		});
		
		req.end();		
       }, 5000);
		
	}	
	
};
