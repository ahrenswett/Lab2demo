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
  document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br>You answered ' + haveKids + '.<br>That is correct! I have 3!';
}

else{
  wrong++;
  if(heldAnswer === ''){
    haveKids= ' no answer ';
  }

  alert('Are you sure about that answer?');
  document.getElementById('question1').innerHTML = 'Question 1: Do you think I have kids?<br>You answered ' + haveKids + '.<br>That is wrong! I have 3!';
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
  document.getElementById('question2').innerHTML= 'Question 2: Do you think that I like ice climbing? You answered ' + iceClimb + ' .<br>That is correct! Its Magical, So whats not to like!!';
}
else{
  wrong ++;
  if(heldAnswer === ''){
    iceClimb = ' no answer ';
  }


  alert('Would you bet your life on it?');
  document.getElementById('question2').innerHTML = 'Question 2: Do you think that I like ice climbing?<br>You answered ' + iceClimb + ' .<br>That is Wrong! Its Magical, So whats not to like!!';
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
  document.getElementById('question3').innerHTML='Question 3: Do you think I ride a vespa?<br>You answered ' + vespa + ' <br>That is correct! I have a broken CB750 Cafe Racer.';
}
else{
  wrong ++;
  if(heldAnswer === ''){
    vespa = ' no answer ';
  }
  alert('put put put nope WRONG!');
  document.getElementById('question3').innerHTML='Question 3: Do you think I ride a vespa?<br>You answered ' + vespa + ' <br>That is Wrong!  I have a broken CB750 Cafe Racer.';
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
  document.getElementById('question4').innerHTML='Question 4: Do you think Im from Boulder,Co?<br>You answered ' + cityFrom + ' <br>That is correct! ';
}

else{
  wrong ++;
  if(heldAnswer === ''){
    cityFrom = ' no answer ';
  }
  alert('Wrong-o!');

  document.getElementById('question4').innerHTML='Question 4: Do you think Im from Boulder,Co?<br>You answered ' + cityFrom + ' <br>That is Wrong!  ';
}



//******anotherLang******
// Asks User if they think I i speak another language then logs the answer in console
var anotherLang = prompt('Do you think I speak another language?');
console.log('the user thinks ' + anotherLang + ' another language');

// Uses shrink function to convert answer to lowercase and truncates to single letter answer
shrink(anotherLang);

//increments a counter if the answer is right or wrong Question 5: Do you think I speak another language?
if (heldAnswer === 'n'){
  right ++;
  alert('Right!I speak some Korean but not fluently, so the answer is no');
  document.getElementById('question5').innerHTML='Question 5: Do you think I speak another language?<br>You answered ' + anotherLang + ' <br>That is correct! I only speak a little Korean. Not enough to count.';
}
else{
  wrong ++;
  if(heldAnswer === ''){
    anotherLang = ' no answer ';
  }
  alert('Sorry buddy, I know a little Korean but not enough to count!');
  document.getElementById('question5').innerHTML='Question 5: Do you think I speak another language?<br>You answered ' + anotherLang + ' <br>That is wrong! I only speak a little Korean. Not enough to count.';

}


console.log('Got ' + right + ' answers right');
console.log('Got ' + wrong + ' answers wrong');

