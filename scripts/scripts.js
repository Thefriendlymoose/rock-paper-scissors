function computerPlay(){
    const rockPaperScissor = ["rock", "paper", "scissor"];
    const randomPlay = rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
    return randomPlay;
}

function userPlay(){
    
}

function playRound(playerSelection, computerSelection){
    const compPlay = computerSelection.toUpperCase();
    const playerPlay = playerSelection.toUpperCase();
    

    switch(true){
        case compPlay === playerPlay:
            return null
        break
        case compPlay === "ROCK" && playerPlay === "PAPER":
            return true
        break
        case compPlay === "ROCK" && playerPlay === "SCISSOR":
            return false
        break
        case compPlay === "PAPER" && playerPlay === "SCISSOR":
            return true
        break
        case compPlay === "PAPER" && playerPlay === "ROCK":
            return false
        break
        case compPlay === "SCISSOR" && playerPlay === "ROCK":
            return true
        break
        case compPlay === "SCISSOR" && playerPlay === "PAPER":
            return false
        break
        
        default:
            return "Incorrect input"
        break
    }

}

function game(){
    let userScore = 0;
    let comptScore = 0;

    for(i=1; i<=5; i++){
        let roundWinner = playRound(prompt("Please enter rock, paper or scissor"), computerPlay()); 
        if(roundWinner){
            console.log(`You Win Round ${i}!`);
            userScore += 1;
        } else if(roundWinner === false){
            console.log(`Computer Wins Round ${i}!`)
            comptScore += 1;
        } else {
            console.log(`No winner in Round ${i}!`)
        }
        
    }


    return (userScore>comptScore) ? `User wins, Your Score is ${userScore}, Computer Score is ${comptScore}`
            : (comptScore>userScore) ? `Computer wins, Your Score is ${userScore}, Computer Score is ${comptScore}`
            : `No winner, Your Score is ${userScore}, Computer Score is ${comptScore}`;

}



console.log(game());
