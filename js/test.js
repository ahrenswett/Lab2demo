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

var questions =
[
  ['Do you think I have kids?', 'y', 'Thats right I have 3! Micah Aliyah and Autumn', 'Are you sure about that answer?'],
  ['Do you think that I like ice climbing?', 'y', 'Do you want to come with me?','Would you bet your life on it?'],
  ['Do you think I ride a vespa?','n','Correct I ride motorscycles but mine is broken','put put put nope!'],
  ['Do you think Im from Boulder,Co?','y','Are you from there too?','Wrong-o!'],
  ['Do you think I speak another language?','n','Right!I speak some Korean but not fluently, so the answer is no','Sorry buddy, I know a little Korean but not enough to count!']
];

//var questionGameRightGuesses = [];

for(var j = 0; j < 5; j++ )
{
  userAnswer = prompt(questions[j][0]);
  shrink(userAnswer);
  console.log('the user guessed ' + questions[j][0] + ' ' + userAnswer);

  if(userAnswer === '')
  {
    prompt('You did not enter a response');
  }
  else if (userAnswer === questions[j][1])
  {
    right++;
    alert(questions[j][2]);
    questions[j].push(userAnswer);
    console.log(questions[j])
  }
  else
  {
    wrong++;
    alert(questions[j][3]);
  }
}

console.log('You got ' + right + ', out of 5 right');
console.log('You got ' + wrong + ', out of 5 wrong');
console.log('users answers = '+ questions[0][4]+' '+questions[1][4]+' '+questions[2][4]+' '+questions[3][4]);
