let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultBoard_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}
function win(userChoice,computerChoice){
	userScore++
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultBoard_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat's ${convertToWord(computerChoice)}${smallCompWord} .You Win!`;
}

function lose(userChoice,computerChoice){

	computerScore++
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultBoard_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord} .You Lost!`;
}

function draw(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultBoard_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} .It is a draw!`;
}


function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
		case "rs":
		case "sp":
		case "pr":
			win(userChoice,computerChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice,computerChoice);
			break;
	}

}

function main(){
	rock_div.addEventListener('click', () => game("r"));

	paper_div.addEventListener('click',() => game("p"));

	scissors_div.addEventListener('click',() => game("s"));	
}main();
