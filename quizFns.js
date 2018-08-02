var count = -1;
var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var answers=[];

var questions = [{question: "When is my birthday?", options: ["01/01/1995", "28/02/1995", "16/11/1995", "31/12/1995"], answer: "16/11/1995"}, {question: "What is my favourite color?", options: ["Black", "Blue", "Purple", "White"], answer: "Blue"}, {question: "What is my favourite animal?", options: ["Dog", "Cat", "Batista", "Panda"], answer: "Dog"}, {question: "Which city am I from?", options: ["Kolkata", "Bangalore", "Mumbai", "Delhi"], answer: "Kolkata"}, {question: "What is my favourite sport?", options: ["Cricket", "Tennis", "Football", "I live in my mom's basement"], answer: "Football"}, {question: "House?", options: ["Greyjoy", "Lannister", "Stark", "Targaeryan"], answer: "Stark"}, {question: "School?", options: ["Hogwarts", "MEA", "BNV", "Homeschooling"], answer: "Hogwarts"}, {question: "Football club?", options: ["Chelsea", "ManUtd", "Barca", "RealM"], answer: "Chelsea"},{question: "Football player?", options: ["LM10", "CR7", "Hazard", "HK"], answer: "LM10"}, {question: "Guess", options: ["A", "B", "C", "D"], answer: "D"}]
localStorage.setItem("questions", JSON.stringify(questions));

order = shuffle(order);
	
function loadQuiz(){
	document.getElementById("errormsg").style.visibility="hidden";

	
	//var questions = [{question: "When is my birthday?", options: ["01/01/1995", "28/02/1995", "16/11/1995", "31/12/1995"], answer: "16/11/1995"}, {question: "What is my favourite color?", options: ["Black", "Blue", "Purple", "White"], answer: "Blue"}, {question: "What is my favourite animal?", options: ["Dog", "Cat", "Batista", "Panda"], answer: "Dog"}, {question: "Which city am I from?", options: ["Kolkata", "Bangalore", "Mumbai", "Delhi"], answer: "Kolkata"}, {question: "What is my favourite sport?", options: ["Cricket", "Tennis", "Football", "I live in my mom's basement"], answer: "Football"}, {question: "House?", options: ["Greyjoy", "Lannister", "Stark", "Targaeryan"], answer: "Stark"}, {question: "School?", options: ["Hogwarts", "MEA", "BNV", "Homeschooling"], answer: "Hogwarts"}, {question: "Football club?", options: ["Chelsea", "ManUtd", "Barca", "RealM"], answer: "Chelsea"},{question: "Football player?", options: ["LM10", "CR7", "Hazard", "HK"], answer: "LM10"}, {question: "Guess", options: ["A", "B", "C", "D"], answer: "D"}]
	//localStorage.setItem("questions", JSON.stringify(questions));
	//order = shuffle(order);
	document.getElementById("submit").style.visibility="hidden";
	loadNext();
	var timer = 60000;
	setInterval(function(){
		timer-=1000;
		if(timer===0)
		{
			submitQuiz();
		}
		if(timer<10000)
			document.getElementById("timer").innerHTML="00:0"+(timer/1000);
		else
			document.getElementById("timer").innerHTML="00:"+(timer/1000);
	}, 1000);
}

function loadNext(){
	answers[count]=document.querySelector('input[name="option"]:checked').value;
	if(count!==-1)
	{
		document.getElementById("prev").style.visibility="visible";
	} 
	else
		document.getElementById("prev").style.visibility="hidden";
	count+=1;
	if(count===9)
	{
			document.getElementById("submit").style.visibility="visible";
			document.getElementById("next").style.visibility="hidden";
	}
	/*if(count>9)
	{
		count-=1;
		alert("You are at the last question!");
	}*/
	//else{
		var quesStr = JSON.parse(localStorage.getItem("questions"));
		document.getElementById("errormsg").innerHTML="XYZ"+quesStr[order[count]].question;
		document.getElementById("question").innerHTML = (count+1)+". "+quesStr[order[count]].question;
		document.getElementById("option0p").innerHTML = quesStr[order[count]].options[0];
		document.getElementById("option1p").innerHTML = quesStr[order[count]].options[1];
		document.getElementById("option2p").innerHTML = quesStr[order[count]].options[2];
		document.getElementById("option3p").innerHTML = quesStr[order[count]].options[3];
		document.getElementById("option0").value = quesStr[order[count]].options[0];
		document.getElementById("option1").value = quesStr[order[count]].options[1];
		document.getElementById("option2").value = quesStr[order[count]].options[2];
		document.getElementById("option3").value = quesStr[order[count]].options[3];	
	//}
}

function loadPrev(){
	document.getElementById("next").style.visibility="visible";
	count-=1;
	if(count===0)
			document.getElementById("prev").style.visibility="hidden";
	answers[count]=document.querySelector('input[name="option"]:checked').value;
	/*if(count<0)
	{
		count+=1;
		alert("You are at the first question!");
	}*/
	//else{
		var quesStr = JSON.parse(localStorage.getItem("questions"));
		document.getElementById("errormsg").innerHTML="XYZ"+quesStr[order[count]].question;
		document.getElementById("question").innerHTML = (count+1)+". "+quesStr[order[count]].question;
		document.getElementById("option0p").innerHTML = quesStr[order[count]].options[0];
		document.getElementById("option1p").innerHTML = quesStr[order[count]].options[1];
		document.getElementById("option2p").innerHTML = quesStr[order[count]].options[2];
		document.getElementById("option3p").innerHTML = quesStr[order[count]].options[3];
		document.getElementById("option0").value = quesStr[order[count]].options[0];
		document.getElementById("option1").value = quesStr[order[count]].options[1];
		document.getElementById("option2").value = quesStr[order[count]].options[2];
		document.getElementById("option3").value = quesStr[order[count]].options[3];
	//}
}

function shuffle(arr){
    var ctr = arr.length, temp, index;
		while(ctr > 0){
			index = Math.floor(Math.random()*ctr);
			ctr--;
			temp = arr[ctr];
			arr[ctr] = arr[index];
			arr[index] = temp;
   }
  return arr;
}

function submitQuiz(){
	answers[count]=document.querySelector('input[name="option"]:checked').value;
	var score = 0;
	for(var i=0; i<10; i++)
	{
		if(answers[i]===questions[order[i]].answer)
			score+=10;
	}
	localStorage.setItem("score", ""+score);
	window.location="./score.html";
}