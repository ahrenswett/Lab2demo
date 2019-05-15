'use strict';

// counts right and wrong answers
var right = 0;
var wrong = 0;
var heldAnswer;
//not used other than to track how many times function is called yet, but works as counter
var loopCount = 0 ;


// converts answer to lowercase and truncates to single letter answer
function shrink(answer){
  answer=answer.toLowerCase();
  if (answer === 'yes' || answer === 'y'){
    heldAnswer = 'y';
  }
  else if(answer === 'no'|| answer === 'n'){
    heldAnswer = 'n';
  }
  else{
    heldAnswer = '';
  }
  loopCount ++;
  console.log(loopCount + ' Loops');
}


//welcomes the user to the page, gets their name and returns it in the console.
var userName = prompt('Hi, welcome to my page what is your name?');
console.log('the users name is ' + userName);

//******KIDS********
// Asks User if they think I have Kids then logs the answer in console
var haveKids = prompt('Do you think I have kids?');
console.log('the user guessed ' + haveKids + ' kids.' );

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(haveKids);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right++;
  alert('Do you know them?');
  document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br><strong>You answered ' + haveKids + '.<br></strong>That is correct! I have 3!';
}


var questions
[
  ['Do you think I have kids?', 'y', 'Do you know them?', 'Are you sure about that answer?']
  ['Do you think that I like ice climbing?', 'y', 'Do you want to come with me?','Would you bet your life on it?']
  ['Do you think I ride a vespa?','Correct I ride motorscycles but mine is broken :(','put put put nope WRONG!']
  ['Do you think Im from Boulder,Co?','Are you from there too?','Wrong-o!']
  ['Do you think I speak another language?','Right!I speak some Korean but not fluently, so the answer is no','Sorry buddy, I know a little Korean but not enough to count!']
]