'use strict';

// // counts right and wrong answers
// var right = 0;
// var wrong = 0;
// var heldAnswer;
// //not used other than to track how many times function is called yet, but works as counter
// var loopCount = 0 ;


// // converts answer to lowercase and truncates to single letter answer
// function shrink(answer){
//   answer=answer.toLowerCase();
//   if (answer === 'yes' || answer === 'y'){
//     heldAnswer = 'y';
//   }
//   else if(answer === 'no'|| answer === 'n'){
//     heldAnswer = 'n';
//   }
//   else{
//     heldAnswer = '';
//   }
//   loopCount ++;
//   console.log(loopCount + ' Loops');
// }

// //welcomes the user to the page, gets their name and returns it in the console.
var userName = prompt('Hi, welcome to my page what is your name?');
console.log('the users name is ' + userName);

// //******KIDS********
// // Asks User if they think I have Kids then logs the answer in console
// var haveKids = prompt('Do you think I have kids?');
// console.log('the user guessed ' + haveKids + ' kids.' );

// // Uses shrink function to convert answer to lowercase and truncates to single letter answer
// shrink(haveKids);

// //increments a counter if the answer is right or wrong
// if (heldAnswer === 'y'){
//   right++;
//   alert('Do you know them?');
//   document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br><strong>You answered ' + haveKids + '.<br></strong>That is correct! I have 3!';
// }
// else{
//   wrong++;
//   if(heldAnswer === ''){
//     haveKids= ' no answer ';
//   }

//   alert('Are you sure about that answer?');
//   document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br><strong>You answered ' + haveKids + '.</strong><br>That is wrong! I have 3!';
// }




// //**********ICE CLIMBING********
// // Asks User if they think I like ice climbing then logs the answer in console
// var iceClimb = prompt('Do you think that I like ice climbing?');
// console.log('the user guessed ' + iceClimb + ' ice climbing.' );

// // Uses shrink function to convert answer to lowercase and truncates to single letter answer
// shrink(iceClimb);

// //increments a counter if the answer is right or wrong
// if (heldAnswer === 'y'){
//   right ++;
//   alert('Do you want to come with me?');
//   document.getElementById('question2').innerHTML= 'Question 2: Do you think that I like ice climbing?<br><strong>You answered ' + iceClimb + ' .<br></strong>That is correct! Its Magical, So whats not to like!!';
// }
// else{
//   wrong ++;
//   if(heldAnswer === ''){
//     iceClimb = ' no answer ';
//   }


//   alert('Would you bet your life on it?');
//   document.getElementById('question2').innerHTML = 'Question 2: Do you think that I like ice climbing?<br><strong>You answered ' + iceClimb + ' .<br></strong>That is Wrong! Its Magical, So whats not to like!!';
// }




// //******VESPA******
// // Asks User if they think I ride a vespa then logs the answer in console
// var vespa = prompt('Do you think I ride a vespa?');
// console.log('the user thinks ' + vespa + ' vespa rider');

// // Uses shrink function to convert answer to lowercase and truncates to single letter answer
// shrink(vespa);

// //increments a counter if the answer is right or wrong
// if (heldAnswer === 'n'){
//   right ++;
//   alert('Correct I ride motorscycles but mine is broken :(');
//   document.getElementById('question3').innerHTML='Question 3: Do you think I ride a vespa?<br><strong>You answered ' + vespa + ' <br></strong>That is correct! I have a broken CB750 Cafe Racer.';
// }
// else{
//   wrong ++;
//   if(heldAnswer === ''){
//     vespa = ' no answer ';
//   }
//   alert('put put put nope WRONG!');
//   document.getElementById('question3').innerHTML='Question 3: Do you think I ride a vespa?<br><strong>You answered ' + vespa + ' <br></strong>That is Wrong!  I have a broken CB750 Cafe Racer.';
// }



// //******CITY FROM******
// // Asks User if they think im from Boulder then logs the answer in console
// var cityFrom = prompt('Do you think Im from Boulder,Co?');
// console.log('the user thinks ' + cityFrom + ' from Boulder,Co?');

// // Uses shrink function to convert answer to lowercase and truncates to single letter answer
// shrink(cityFrom);

// //increments a counter if the answer is right or wrong
// if (heldAnswer === 'y'){
//   right ++;
//   alert('Are you from there too?');
//   document.getElementById('question4').innerHTML='Question 4: Do you think Im from Boulder,Co?<br><strong>You answered ' + cityFrom + ' <br></strong>That is correct! ';
// }

// else{
//   wrong ++;
//   if(heldAnswer === ''){
//     cityFrom = ' no answer ';
//   }
//   alert('Wrong-o!');

//   document.getElementById('question4').innerHTML='Question 4: Do you think Im from Boulder,Co?<br><strong>You answered ' + cityFrom + ' <br></strong>That is Wrong!  ';
// }



// //******anotherLang******
// // Asks User if they think I i speak another language then logs the answer in console
// var anotherLang = prompt('Do you think I speak another language?');
// console.log('the user thinks ' + anotherLang + ' another language');

// // Uses shrink function to convert answer to lowercase and truncates to single letter answer
// shrink(anotherLang);

// //increments a counter if the answer is right or wrong Question 5: Do you think I speak another language?
// if (heldAnswer === 'n'){
//   right ++;
//   alert('Right!I speak some Korean but not fluently, so the answer is no');
//   document.getElementById('question5').innerHTML='Question 5: Do you think I speak another language?<br><strong>You answered ' + anotherLang + ' <br></strong>That is correct! I only speak a little Korean. Not enough to count.';
// }
// else{
//   wrong ++;
//   if(heldAnswer === ''){
//     anotherLang = ' no answer ';
//   }
//   alert('Sorry buddy, I know a little Korean but not enough to count!');
//   document.getElementById('question5').innerHTML='Question 5: Do you think I speak another language?<br><strong>You answered ' + anotherLang + ' <br></strong>That is wrong! I only speak a little Korean. Not enough to count.';

// }
// console.log('Got ' + right + ' answers right');
// console.log('Got ' + wrong + ' answers wrong');


// alert(userName +', you got ' + right + ' right! :) and ' + wrong + ' wrong. :(');

// As a developer, I want to add a sixth question to my 
// guessing game that takes numeric input by prompting a 
// user to guess a number (for instance, “What is my favorite
// number?” or “How many Pokémon did I catch this week?”), and 
// indicates to the user whether the guess is “too high” or 
// “too low”, and gives the user exactly four opportunities 
// to get the correct answer, so that my fancy programming 
// skills are showcased.


// var numberGuessed = prompt( 'Im thinking of a number between 1 and 50. What do you think it is?');

// for(var i = 1; i<5; i++){
//   if(i === 4 && numberGuessed !== 37){
//     alert('Im sorry you did not guess right :( the number was 37, my age :)');
//   }
//   else if(numberGuessed === 37){
//     alert('Thats Right!!! And thats how young I am!');
//     break;
//   }
//   else if(numberGuessed < 37){
//     numberGuessed = prompt('Sorry ' + userName + ', that is not the number. Your guess is to Low. You have ' + (4 - i) + ' tries left');
//   }
//   else if(numberGuessed > 37){
//     numberGuessed = prompt('Sorry ' + userName + ', that is not the number. Your guess is to high. You have ' + (4 - i) + ' tries left');
//   }
//   console.log(i);
// }


var answersArray = ['colorado', 'texas', 'california', 'north carolina', 'oregon', 'new york'];
var rightAnswerArray =[];

var userAnswer= prompt(userName + ', what states do you think I have lived in?');
userAnswer = userAnswer.toLowerCase();

for (var i = 6; i > 0; i--)
{
  console.log('i now = ' +i);
  if( answersArray.includes(userAnswer) === true && i >1 )
  {
    // transforms the users input to lowercase then logs whether or not the array contains their input in boolean
    userAnswer = userAnswer.toLowerCase();
    console.log('in the if');

    rightAnswerArray.push(userAnswer);
    console.log(userAnswer);
    console.log(rightAnswerArray);

    userAnswer = prompt ('Thats right, I have lived in ' + userAnswer + '! Where else have i lived?');
  }
  else if( answersArray.includes(userAnswer) === true)
  {
    console.log('in the else if');
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
