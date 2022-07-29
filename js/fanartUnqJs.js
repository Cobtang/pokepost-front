console.log("Loaded fanartUnqJs.js");

/*Script Variables*/

let fanartUnqBody = document.getElementById("fanartUnqBody");
let fanartTitle = document.getElementById("fanartTitle");
let fanartAuthor = document.getElementById("fanartAuthor");
let fanartPostDate = document.getElementById("fanartPostDate");
let fanartTags = document.getElementById("fanartTags");
let fanartImg = document.getElementById("fanartImg");
let rateChk = document.getElementById("rateChk");
let rateImg = document.getElementById('rateImg');
let flagChk = document.getElementById('flagChk');
let flagImg = document.getElementById('flagImg');
let prevArt = document.getElementById('prevArt');
let nextArt = document.getElementById('nextArt');
let currentArtId = function () { getArtID }
let idLowerLimit, idUpperLimit;

/*Event Listeners*/

fanartUnqBody.onload = getFanart();
rateChk.onchange = function () { rateChkCheckChanged(rateImg) };
flagChk.onchange = function () { flagChkCheckChanged(flagImg) };

/*Functions*/

/**
 * Retrieves the id value in the URI.
 * This will be used to retrieve data.
 */
function getArtId(doc_uri) {
	//Function Variables
	let fanart, paramIndex;

	//Determining fanart_id
	paramIndex = doc_uri.lastIndexOf('/');
	fanart = doc_uri.substring((paramIndex + 1));

	//Return Id
	return parseInt(fanart);
}

/**
 *	Sends a GET request with an ID for a specific fanart. 
 *	The response is expected to have details specific to that fanart (i.e. url, author, etc.)
 *	Upon response, JS feeds the given information into its corresponding location
 */
function getFanart() {
	//Function Variables
	let fanartId, artURL, artRequest, artResponse, idURL, idRequest, idResponse, idSeparatorIdx;

	//Getting current fanartId
	fanartId = function () {
		getArtId(document.documentURI)
	}

  	// Opening a connection to the server
  	console.log("Running fanartUnqJs.js with the id: " + fanartId);
	artURL = "localhost:8080/fanart/" + fanartId;
  	console.log("artURL is: " + artURL);

  	//Making a bridge to the server through XMLHttpRequest()
  	artRequest = new XMLHttpRequest();

  	//Initializaing a request to the order
	artRequest.open("GET", artURL, false);

	// Send out request
	artRequest.send(null);

  	artRequest.onload = function () {
			console.log("artRequest.onload is called!");

		//Request is successful, parse the object and use it to format the page
		if (artRequest.status >= 200 && artRequest.status < 300) {
			console.log("Request was successful!");
			console.log("Response: " + artRequest.response);
			console.log("Status Text: " + artRequest.statusText);
			artResponse = artRequest.response;
			sessionStorage.setItem("fanart_object", artResponse);

			//Parsing response into a JSON object
			artResponse = JSON.parse(artResponse);

			//Setting elements
			fanartTitle.innerHTML = artResponse.title;
			fanartAuthor.innerHTML = artResponse.author;
			fanartPostDate.innerHTML = artResponse.postDate;
			fanartTags.innerHTML = artResponse.tags;
			fanartImg.src = artResponse.url;

			//Retrieving Id limiters
			//Opening a new connection to the server
			idURL = "localhost:8080/fanart/info/";
			console.log("idURL is: " + idURL);

			//Making a bridge to the server through XMLHttpRequest()
			idRequest = new XMLHttpRequest();

			//Initializaing a request to the order
			idRequest.open("GET", idURL, false);

			idRequest.onload = function () {
				console.log("idRequest.onload is called!");
				//Request is successful. Store the id limiters
				if (request.status >= 200 && request.status < 300) {
					console.log("Request was successful!");
					console.log("Response: " + idRequest.response);
					console.log("Status Text: " + idRequest.statusText);
					idResponse = idRequest.response;

					//Parse response into id values
					idSeparatorIdx = idResponse.indexOf("/");
					idLowerLimit = parseInt(idResponse.substring(0, idSeparatorIdx));
					idUpperLimit = parseInt(idResponse.substring(idSeparatorIdx, 0));
				} else { //Request failed. Disable nextArt and prevArt buttons
					nextArt.hidden = true;
					prevArt.hidden = true;
                }
			}
			idRequest.send();
		} else { //Request failed. Handle the error and format to default. Disable nextArt and prevArt buttons
			//Error handling
			const errorMessage = document.createElement("error");
			errorMessage.textContent = "Connection Error!";
			console.log(artRequest.status);
			alert(
				"FAILED: Getting Pokemon Failed!, Please Try Again or Contact Support."
			);

			//Setting elements
			fanartTitle.innerHTML = "Spheal With It!";
			fanartAuthor.innerHTML = "Leanardo Devinci";
			fanartPostDate.innerHTML = "07/06/1841";
			fanartTags.innerHTML = "spheal, leanardodevinci";
			fanartImg.src = "images/fanart/spheal.png";

			//Disabling buttons
			nextArt.hidden = true;
			prevArt.hidden = true;
		}
	};
	// Send out request
	artRequest.send();
}

/**
 *	Changes the image file between heart.png and heartEmpty.png based on the checked state
 */
function rateChkCheckChanged(imageId){
	console.log("rateChk.onchange called");
	let url = "";
	if (rateChk.checked){
		url = "images/heart.png";
	}
	else{		
		url = "images/heartEmpty.png";
	}
	console.log(imageId + " src changed to" + url);
	imageId.src = url;
}

/**
 *	Changes the image file between flag.png and flagLow.png based on the checked state
 */
function flagChkCheckChanged(imageId){
	console.log("rateChk.onchange called");
	let url = '';
	if (flagChk.checked){
		url = 'images/flag.png';
	}
	else{		
		url = 'images/flagLow.png';
	}
	console.log(imageId + " src changed to" + url);
	imageId.src = url;
}

function prevArtClick() {
	
}

function nextArtClick() {

}