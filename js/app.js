'use strict';

// counts right and wrong answers
var right = 0;
var wrong = 0;
var heldAnswer;
//not used yet but works as counter
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
}
else{
  wrong++;
  alert('Are you sure about that answer?');
}




//**********ICE CLIMBING********
// Asks User if they think I like ice climbing then logs the answer in console
var iceClimb = prompt('Do you think that I like ice climbing?');
console.log('the user guessed ' + iceClimb + ' ice climbing.' );

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(iceClimb);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right ++;
  alert('Do you want to come with me?');
}
else{
  wrong ++;
  alert('Would you bet your life on it?');
}




//******VESPA******
// Asks User if they think I ride a vespa then logs the answer in console
var vespa = prompt('Do you think I ride a vespa?');
console.log('the user thinks ' + vespa + ' vespa rider');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(vespa);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'n'){
  right ++;
  alert('Correct I ride motorscycles but mine is broken :(');

}
else{
  wrong ++;
  alert('put put put nope WRONG!');
}



//******CITY FROM******
// Asks User if they think im from Boulder then logs the answer in console
var cityFrom = prompt('Do you think Im from Boulder,Co?');
console.log('the user thinks ' + cityFrom + ' from Boulder,Co?');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(cityFrom);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'y'){
  right ++;
  alert('Are you from there too?');
}
else{
  wrong ++;
  alert('Wrong-o!');
}



//******anotherLang******
// Asks User if they think I i speak another language then logs the answer in console
var anotherLang = prompt('Do you think I speak another language?');
console.log('the user thinks ' + anotherLang + ' another language');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(anotherLang);

//increments a counter if the answer is right or wrong
if (heldAnswer === 'n'){
  right ++;
  alert('Right!I speak some Korean but not fluently, so the answer is no');
}
else{
  wrong ++;
  alert('Sorry buddy, I know a little Korean but not enough to count!')
}


console.log('Got ' + right + ' answers right');
console.log('Got ' + wrong + ' answers wrong');

