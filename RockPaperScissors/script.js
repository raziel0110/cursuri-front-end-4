var objects = ["rock","paper","scissors"];

var user = Math.floor(Math.random() * 3);
var computer = Math.floor(Math.random() * 3);
//console.log(user,computer);

function play(val1,val2){
    if( val1 === val2){
        console.log("No one win the game! It's a draw!");
    } else if( val1  === "rock" && val2 === "paper"){
        console.log("Computer has " + val2 +  " and win the game! User has "+ val1 +"!");
    } else if( val1 === "rock" && val2 === "scissors"){
        console.log("User has "+ val1 + " and win the game! Computer has "+ val2 +"!" );
    } else if( val1 === "paper" && val2 === "rock"){
        console.log("User has "+ val1 + " and win the game! Computer has " + val2 + "!");
    } else if(val1 === "paper" && val2 === "scissors"){
        console.log("Computer has " + val2 + " and win the game! User has " + val1 +"!");
    } else if(val1 === "scissors" && val2 === "rock"){
        console.log("Computer has "+ val2 + " and win the game! User has " + val1 +"!");
    } else if(val1 === "scissors" && val2 === "paper"){
        console.log("User has " + val1 + " and win the game! Computer has " + val2 + "!");
    }
}

play(objects[user],objects[computer]);