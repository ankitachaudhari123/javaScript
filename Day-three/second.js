// create a game where you start with any random game number . ask the user to keep gussing the game number untill the user enters correct value .


let gameNum = 30;
let userNum = prompt("Guss the number :");

while (userNum != gameNum){
   userNum = prompt("you enter wrong number Guss the number :"); 
}

console.log("You entered the right number");


