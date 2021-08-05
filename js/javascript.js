//Génère la pyramide
function generate(){
	let messageDiv= document.getElementById("message");
	let width = document.getElementById("PyramideWidth").value;
	let outputDiv = document.getElementById("output");
	messageDiv.innerHTML = "";
	outputDiv.innerHTML = "";
	let result = "";
	if(width<1 || width>20 || isNaN(width)){
		messageDiv.innerHTML = "Entrée non valide!";
	}
	else{
		for(i=1;i<=width;i++){
			result += "<div class='pyramideRow'>";
			for(j=0;j<i;j++){
				result += "<img src='img/brick.jpg' width='50' height='50'>";
			}
			result += "</div>";
		}
		outputDiv.innerHTML = result;
	}
	document.getElementById("PyramideWidth").value = "";
}

//Supprime la pyramide
function reset(){
	document.getElementById("output").innerHTML = "";
	document.getElementById("message").innerHTML = "";
}
