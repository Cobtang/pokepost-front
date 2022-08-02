/**
 * Uses AJAX to send a POST request and offers the option to use callback functions
 */
function putRequest(url, json, onDone, onHeadersReceived, onLoading) {
	console.log("PREPARING PUT REQUEST TO: " + url);

	// Opening a GET request to the URL by creating XML Http Request object
	let request = new XMLHttpRequest();

  	// Set a callback function for the readystatechange and load events
  	request.onreadystatechange = readyStateChange;
  	request.onload = load;

	request.open("PUT", url, true);

	// Setting the header of the API request if there's a json object
	if (json) {
		request.setRequestHeader("Content-type", "application/json");
	}

	// Send out request
	request.send(json);

	// Asynchronously set up request
	// For displaying loading information
	function readyStateChange () {
		// HEADERS RECEIVED - send() has been called, and headers and status are available.
		if (request.readyState === 2) {
			console.log("PUT Request is sent!");
			onHeadersReceived();
		}
		// LOADING - Downloading; responseText holds partial data.
		else if (request.readyState === 3) {
			console.log("PUT response, loading it...");
			onLoading();
		}
		// DONE ready state is handled by onload
	}
	
	// DONE Ready State
	function load () {
		// if the request is good and valid, return the response
		if (request.status >= 200 && request.status < 300) {
			console.log("Status Text: " + request.status);
			let response = request.response;
			console.log("Response: " + response);
			if (onDone != null) {
				onDone(response);
				return;
			}
		} 

		// if request is a redirect, return an unexpected error
		else if (request.status >= 300 && request.status < 400) {
			console.log(request.status);
			alert("UNEXPECTED REDIRECT RESPONSE! " + request.status);
			return null;
		} 
		
		//Error handling
		else {
			console.log(request.status);
			alert("PUT REQUEST FAILED! " + request.status );
			return null;
		}
	}
}