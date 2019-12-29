'use strict'

var url =require('url');
exports.handler = function(event,context,callback){
	
	var list = ['www.google.com',''];
	for(var i=0;i<list.length;i++){
		var target =list[i];
		
		var urlObject;
		setTimeout(function(){urlObject =url.parse(target);},3000);
		
		var mod = require(urlObject.protocol.substring(0,urlObject.protocol.length-1));
    
		var req = mod.request(urlObject,function(res){
			
			res.setEncoding('utf8');
			res.on('data',function(chunk){
				//console.log
				
			});			
						
			res.on('end',function(){
				//console.log
				callback();
			});
			
						
		});
		
				
		req.on('error',function(e){			
			//console.log
			callback(e);			
			
		});
		
		req.end();						
	}	
};
