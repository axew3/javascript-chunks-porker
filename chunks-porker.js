let chunks = [];
let count = 0;
let tempFileName = Date.now();
onmessage = function(e) {
  console.log('Message received from main script');
  var chunk = e.data[0];

  new Promise((resolve, reject) => {
chunks.push(chunk);

 	 resolve(chunks);
 
}).then(chunks => {

	FNameChunks = tempFileName;
  
  var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    
urlEncodedDataPairs.push(encodeURIComponent("w3Chunk") + '=' + encodeURIComponent(chunks[count]) + '&' + encodeURIComponent("FNameChunks") + '=' + encodeURIComponent(FNameChunks));

 XHR.addEventListener('error', function(event) {
 	 console.log(event.error);
  });
 XHR.addEventListener('timeout', function(event) {
   console.log(event);
  });
 XHR.onreadystatechange = function() {
    if (XHR.readyState === 0 || XHR.readyState === 1) { 
      console.log(XHR.response + ' starting');
    } else if (XHR.readyState === 3) {
    	console.log(XHR.response + ' progressing1');
    } else if (XHR.readyState === 4) {
    	console.log(XHR.response + ' done');
    } else {
    	console.log(XHR.response + ' progressing2');
    }
  }
  
  XHR.open('POST', './' + 'porker_ask.php');
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedDataPairs);

    console.log('Do this '+ chunks[count]);
   count++;
})

  //console.log('Posting message back to main script');
  postMessage('... end of end');
}
