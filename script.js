// We use this URL to retieve data from block chain API

// I declare my url
const url = "https://blockchain.info/ticker";

// I create a request with JS, 
let request = new XMLHttpRequest();    // Create an object
request.open("GET", url);             // open a new request that will use url to access API
request.responseType = "json";       // I want the date to be in Json format
request.send();                     // I send my request

//Once I receive a response, this function must be executed.
request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let storeResponse = request.response;  // Store the response
            console.log(storeResponse);
        }
    }
}