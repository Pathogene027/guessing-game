let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
  return Math.floor(Math.random()*9)
}
const getAbsoluteDistance = (guess1,guess2)=>{
  return Math.abs(guess1-guess2)
}
const compareGuesses = (humanGuess, computerGuess,secretTarget)=>{
  if(humanGuess>0 && humanGuess< 9){
    if (getAbsoluteDistance(humanGuess,secretTarget) > getAbsoluteDistance(computerGuess,secretTarget)){
      return false;
    }
    else{
      return true;
    }
  }
  else{
    alert('Your number is out of range')
  }
}
const updateScore = (score)=>{
  if (score==='human'){
    humanScore+=1
  }
  else if(score==='computer'){
    computerScore+=1
  }
}
const advanceRound = () =>{
  currentRoundNumber+=1;
}