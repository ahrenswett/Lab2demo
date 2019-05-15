'use strict';

/////////////////////////FUNCTIONS///////////////////////////////////
// converts answer to lowercase and truncates to single letter answer
//requires a globaly declared variable "userAnswer"
function shrink(answer)
{
  answer=answer.toLowerCase();
  if (answer === 'yes' || answer === 'y')
  {
    userAnswer = 'y';
  }
  else if(answer === 'no'|| answer === 'n')
  {
    userAnswer = 'n';
  }
  else{
    userAnswer = '';
  }
  loopCount ++;
  console.log(loopCount + ' Loops');
}

////////////////////////////BEGIN CODE///////////////////////////////
// counts right and wrong answers
var right = 0;
var wrong = 0;
var userAnswer;
//not used other than to track how many times function is called yet, but works as counter
var loopCount = 0 ;

//welcomes the user to the page, gets their name and returns it in the console.
var userName = prompt('Hi, welcome to my page what is your name?');
console.log('the users name is ' + userName);

//******KIDS********
// Asks User if they think I have Kids then logs the answer in console
//var haveKids = prompt('Do you think I have kids?');
//console.log('the user guessed ' + haveKids + ' kids.' );

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
//shrink(haveKids);

//increments a counter if the answer is right or wrong
// if (userAnswer === 'y'){
//   right++;
//   alert('Do you know them?');
//   document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br><strong>You answered ' + haveKids + '.<br></strong>That is correct! I have 3!';
// }
// else
//   {
//     wrong++;
//     if(userAnswer === '')
//     {
//       haveKids= ' no answer ';
//     }

//     alert('Are you sure about that answer?');
//     document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br><strong>You answered ' + haveKids + '.</strong><br>That is wrong! I have 3!';
//   }
// }

var questions =
[
  ['Do you think I have kids?', 'y', 'Thats right I have 3! Micah Aliyah and Autumn', 'Are you sure about that answer?']
    ['Do you think that I like ice climbing?', 'y', 'Do you want to come with me?','Would you bet your life on it?']
    ['Do you think I ride a vespa?','Correct I ride motorscycles but mine is broken','put put put nope!']
    ['Do you think Im from Boulder,Co?','Are you from there too?','Wrong-o!']
    ['Do you think I speak another language?','Right!I speak some Korean but not fluently, so the answer is no','Sorry buddy, I know a little Korean but not enough to count!']
];

//var questionGameRightGuesses = [];

for(var j = 0; j < 6; j++ )
{
  userAnswer = prompt(questions[j][1]);
  shrink(userAnswer);
  console.log('the user guessed ' + questions[j][1] + ' ' + shrink(userAnswer));
  
  if(userAnswer === '')
  {
    prompt('You did not enter a response, Please resubmit your answer.');
    j--;
  }
  else if (userAnswer === questions[j][2])
  {
    right++;
    alert(questions[j][3]);
    questions.push(userAnswer);
  }
  else
  {
    wrong++;
    alert(questions[j][4]);
  }
}

console.log('You got ' + right + ', out of 5.');
console.log('You got ' + wrong + ', out of 5.');