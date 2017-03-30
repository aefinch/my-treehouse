var myRequest = new XMLHttpRequest();
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");
var row6 = document.getElementById("row6");
var row7 = document.getElementById("row7");
var row8 = document.getElementById("row8");
var row9 = document.getElementById("row9");
var row10 = document.getElementById("row10");
var row11 = document.getElementById("row11");
var allRows=[row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11]
function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	var badges = data.badges;
	for (var y=allRows.length-1; y>0;y--){
		console.log(allRows[y]);
		for (var i=0; i<y; i++){
			
			console.log(badges[i].icon_url)
			allRows[y].innerHTML+=`<img class="badges" src="${badges[i].icon_url}">`;
		};
	};


	console.log(badges);

}

function executeThisCodeAfterFileFails(){
	console.log("boooooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","https://teamtreehouse.com/andreafinch.json");
myRequest.send();