var answers = JSON.parse(localStorage.getItem("answers"));
var questions = JSON.parse(localStorage.getItem("questions"));
var order = JSON.parse(localStorage.getItem("order"));
function displayAnswers(){
	//console.log(answers);
	//document.getElementById("displayAnswers").innerHTML = localStorage.getItem("answers");
	var cell="cell";
	for(var i=0; i<10; i+=1){
		for(var j=0; j<2; j+=1){
			cell+=""+i+j;
			if(j==0){
				document.getElementById(cell).innerHTML = answers[i];
			}
			else{
				document.getElementById(cell).innerHTML = questions[order[i]].answer;
			}
			cell="cell";
		}
		/*change colors of display*/
		if(answers[i] === questions[order[i]].answer){
			document.getElementById("cell"+i+"0").style.color = "green";
		}
		else{
			document.getElementById("cell"+i+"0").style.color = "red";
		}
		document.getElementById("cell"+i+"1").style.color = "green";
	}
}

function score(){
	document.getElementById("scoreWindow").innerHTML="Your score is : "+localStorage.getItem("score");
	displayAnswers();
}

function loadHome(){
	window.location="./home.html";
}

function loadLogin(){
	window.location="./index.html";
}
