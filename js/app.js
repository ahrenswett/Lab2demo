'use strict';

// counts right and wrong answers
var right = 0;
var wrong = 0;
var heldAnswer;

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
}


//******KIDS********
// Asks User if they think I have Kids then logs the answer in console
var haveKids = prompt('do you think I have kids?');
console.log('the user guessed ' + haveKids + ' kids.' );

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(haveKids);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right++;
}
else{
  wrong++;
}
alert('Are you sure about that answer?')






//**********ICE CLIMBING********
// Asks User if they think I like ice climbing then logs the answer in console
var iceClimb = prompt('Do you think that I like ice climbing?');
console.log('the user guessed ' + iceClimb + ' ice climbing.' );

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(iceClimb);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right ++;
}
else{
  wrong ++;
}
alert('Would you bet your life on it?')






//******VESPA******
// Asks User if they think I ride a vespa then logs the answer in console
var vespa = prompt('Do you think I ride a vespa?');
console.log('the user thinks ' + vespa + ' vespa rider');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(vespa);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'n'){
  right ++;
}
else{
  wrong ++;
}
alert('I hope your sure about that');





//******CITY FROM******
// Asks User if they think I ride a vespa then logs the answer in console
var cityFrom = prompt('Do you think Im from Boulder,Co?');
console.log('the user thinks ' + cityFrom + ' from Boulder,Co?');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(cityFrom);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right ++;
}
else{
  wrong ++;
}
alert('Are you from there? How do you know if im from there or not?');






//******anotherLang******
// Asks User if they think I ride a vespa then logs the answer in console
var anotherLang = prompt('Do you think Im speak another language?');
console.log('the user thinks ' + anotherLang + ' another language');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(anotherLang);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'n'){
  right ++;
}
else{
  wrong ++;
}
alert('Hope your right!!!');

console.log('Got ' + right + ' answers right');
console.log('Got ' + wrong + ' answers wrong');

