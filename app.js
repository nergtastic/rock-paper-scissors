var pcChoice = Math.floor(Math.random() * 3);
var userChoiceWord = ["Rock", "Paper", "Scissors"]

function makeChoice(userChoice){
    var elementAnswer = document.getElementById("answerText");
    var elementResult = document.getElementById("resultText");

    document.getElementById("userText").innerText = "You chose: " + userChoiceWord[userChoice];

    console.log(pcChoice);

    switch(pcChoice){
        case 0:
        elementAnswer.innerText = "ROCK!";
            if (userChoice==0){
                elementResult.innerText = "We Tied! REMATCH!";
            }else if (userChoice==1){
                elementResult.innerText = "You Win! Nice one!";
            }else {
                elementResult.innerText = "I Won! WOOHOO!";
            }
        break;
        case 1:
        elementAnswer.innerText = "PAPER!";
            if (userChoice==0){
                elementResult.innerText = "I Won! WOOHOO!";
            }else if (userChoice==1){
                elementResult.innerText = "We Tied! REMATCH!";
            }else {
                elementResult.innerText = "You Win! Nice one!";
            }
        break;
        case 2:
            elementAnswer.innerText = "Scissors!";
            if (userChoice==0){
                elementResult.innerText = "You Win! Nice one!"
            }else if (userChoice==1){
                elementResult.innerText = "I Win! WOOHOO!"
            }else {
                elementResult.innerText = "We Tied! REMATCH!"
        }
        break;
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function playAgain(){
    location.reload();
}