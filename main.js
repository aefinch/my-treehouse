var myRequest = new XMLHttpRequest();

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data)
}

function executeThisCodeAfterFileFails(){
	console.log("boooooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","https://teamtreehouse.com/andreafinch.json");
myRequest.send();