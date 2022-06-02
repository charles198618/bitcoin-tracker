// We use this URL to retieve data from block chain API

// I declare my url
const url = "https://blockchain.info/ticker";

// I create a request with JS, 
let request = new XMLHttpRequest();    // Create an object
request.open("GET", url);             // open a new request that will use url to access API
request.responseType = "json";       // I want the date to be in Json format
request.send();