var colors =[];
var selectedColor;
var numSquare = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgb");
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");


init();
function init(){
	setButtons();
	reset();
	setSquare();
}

function reset(){
	message.textContent = "";
	colors = putColor(numSquare);
	h1.style.background = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	chooseColor(numSquare);
}

function chooseColor(numSquare){
	var colorID = Math.floor(Math.random() * numSquare);
	selectedColor = colors[colorID];
	rgbDisplay.textContent = selectedColor;
}

function setSquare(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickColor = this.style.background;
			if(clickColor === selectedColor){
				changeColor(selectedColor);
				message.textContent = "Correct!";
				resetButton.textContent = "PLAT AGAIN?"
			}
			else{
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
	h1.style.background = color;
}



function putColor(numSquare){
	var res = [];
	for(var i = 0; i < numSquare; i++){
		res.push(createColor());
	}
	return res;
}

function createColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}

function setButtons(){
	resetButton.addEventListener("click", function(){
		reset();
	});
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "EASY"){
				numSquare = 3;
			}
			else{
				numSquare = 6;
			}
			reset();
		});
	}
}
