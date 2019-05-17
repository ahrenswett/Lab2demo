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


//welcomes the user to the page, gets their name and returns it in the console.
//************************   Requires global variable userName *********************
function welcome()
{
  userName = prompt('Hi, welcome to my page what is your name?');
  console.log('the users name is ' + userName);
}

//Asks the user 5 Questions about me *****requires global var userAnswer*********
function questions5()
{
  var questions =
  [
    ['Do you think I have kids?', 'y', 'Thats right I have 3! Micah Aliyah and Autumn', 'Are you sure about that answer?'],
    ['Do you think that I like ice climbing?', 'y', 'Do you want to come with me?','Would you bet your life on it?'],
    ['Do you think I ride a vespa?','n','Correct I ride motorscycles but mine is broken','put put put nope!'],
    ['Do you think Im from Boulder,Co?','y','Are you from there too?','Wrong-o!'],
    ['Do you think I speak another language?','n','Right!I speak some Korean but not fluently, so the answer is no','Sorry buddy, I know a little Korean but not enough to count!']
  ];

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
}


// *********************************** Number Guessing Game *********************************//
function numberGuessGame()
{
  var numberGuessed = Number(prompt( 'Im thinking of a number between 1 and 50. What do you think it is?'));
  var min = 1;
  var max = 50;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  randomNumber = random;
  
  
  for(var i = 1; i<5; i++)
  {
    if(i === 4 && numberGuessed !== random)
    {
      alert('Im sorry you did not guess right :( The number was ' + random + ' :)');
    }
    else if(numberGuessed === random)
    {
      alert('Thats Right!!! The number was ' + random + ' :)');
  
      guessedRight = true;
      break;
    }
    else if(numberGuessed < random)
    {
      numberGuessed = prompt('Sorry ' + userName + ', that is not the number. Your guess is to Low. You have ' + (4 - i) + ' tries left');
    }
    else if(numberGuessed > random)
    {
      numberGuessed = prompt('Sorry ' + userName + ', that is not the number. Your guess is to high. You have ' + (4 - i) + ' tries left');
    }
    console.log(i);
  }
}


// ************************    Array Game Question 7    **********************************//
//**************      Requires a global variable answersArray that is assigned an array of correct answers ******************
//**************        Requires a global variable rightAnswersArray that holds the users correct guesses  ******************
function arrayGame(answerKeyArray)
{
  var userAnswer= prompt(userName + ', what states do you think I have lived in?');
  userAnswer = userAnswer.toLowerCase();

  for (var i = 6; i > 0; i--)
  {
    console.log('i now = ' +i);
    if( answerKeyArray.includes(userAnswer) === true && i >1 )
    {
      // transforms the users input to lowercase then logs whether or not the array contains their input in boolean
      userAnswer = userAnswer.toLowerCase();
      console.log('in the if');

      // Pushes users answer to rightAnswerArray than logs their answer and the contents of rightAnswerArray
      rightAnswerArray.push(userAnswer);
      console.log(userAnswer);
      console.log(rightAnswerArray);

      userAnswer = prompt ('Thats right, I have lived in ' + userAnswer + '! Where else have i lived?');
    }
    else if( answersArray.includes(userAnswer) === true)
    {
      console.log('in the else if');

      // Pushes users answer to rightAnswerArray than logs their answer and the contents of rightAnswerArray
      rightAnswerArray.push(userAnswer);
      console.log(userAnswer);
      console.log(rightAnswerArray);

      alert('Thats right, I have lived in ' + userAnswer + '! thats was your last guess. Lets see how you did!');
    }
    else if(i >1)
    {
      userAnswer = prompt('Nope try again you have ' + (i-1) +' tries left.');
      console.log('in the else');
    }
    else
    {
      alert('Nope, and thats was your last guess. Lets see how you did!');
    }
  }
}


////////////////////////////BEGIN CODE///////////////////////////////
// counts right and wrong answers
var right = 0;
var wrong = 0;
var userAnswer;
var userName;
//not used other than to track how many times function shrink is called, but works as counter
var loopCount = 0 ;


//Calls welcom prompt gets name and starts the questrions5 function
welcome();
questions5();
//Sends right wrong answer count to console then alerts the user their scores
console.log('Got ' + right + ' answers right');
console.log('Got ' + wrong + ' answers wrong');
alert(userName +', you got ' + right + ' right! :) and ' + wrong + ' wrong. :(');


//Calls the numberGuessGame sets a variable to hold the random # globaly.
var randomNumber = 0;
numberGuessGame();

//assigns Array Game required variables. and calls the function
var answersArray = ['colorado', 'texas', 'california', 'north carolina', 'oregon', 'new york'];
var rightAnswerArray = [];
arrayGame(answersArray);


//Thanks the user for playing, informs them of their results.
alert('Thanks for taking time to play my game! \n In the initial 5 questions about me you got '+ right +' right and '+ wrong + ' wrong.');


//Sets a variable that acts as a switch, based on a boolean set by the number guessing game then determines which response to give.
var guessedRight = false;
if(guessedRight === true)
{
  alert('In the number guessing game you guessed the number!\n It was '+ randomNumber+ ', \nGood Job!');
}
else
{
  alert('In the number guessing game you did not guess right :( thats ok 4/50 are rough odds!\n the numberwas '+ randomNumber+ '.');
}

alert('In the the places I have lived you guessed ' + rightAnswerArray.length + ' places right.\n' + rightAnswerArray + '.\n' + 'The places besides Washington are '+ answersArray );





















