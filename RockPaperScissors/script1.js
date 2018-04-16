var userScore = 0;
var compScore = 0;

var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("computer-score");

var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

function getComputerChoise() {
    var choises = ["r","p","s"];
    var choise = choises[Math.floor(Math.random() * 3)];
    return choise;
}
function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = user + " beats " + computer +".You win!"
}

function lose(user,computer){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = computer + " beats " + user + ". You lost!";
    
}

function draw(user,computer){
    
}


function game(userChoise){
    const computerChoise = getComputerChoise();
    switch(userChoise + computerChoise){
        case "rs":
        case "pr":
        case "sp":
            win(userChoise,computerChoise);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoise,computerChoise);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoise,computerChoise);
            break;
    }
}

function main(){

    

    rock_div.addEventListener("click",function(){
        game("r");
    });

    paper_div.addEventListener("click",function(){
        game("p");
    });

    scissors_div.addEventListener("click",function(){
        game("s");
    });

}

main();