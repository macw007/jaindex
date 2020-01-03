'use strict'

var url =require('url');

export.handler = function(event,context,callback){	
	
	let list = ['https://www.google.com/','https://www.yahoo.com/'];
	for(let i=0;i<list.length; i++){
		
		setTimeout( function(){ 		
		var target =list[i];
    const https = require('https');

    https.get(target, (resp) => {
    let data = '';

  // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

  // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log("data was successfully collected"+data);
	    callback();
    });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
	    callback();
    });
		
       }, 5000);
		
	}	
	
};

