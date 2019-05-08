/*

var gender = prompt('Are you male or Female?');

gender = gender.toLowerCase();

if(gender === 'male'){
    alert('Awesome Guys Rock!');
}

else if(gender === 'female'){
    alert('Sweet girls kick ass!');
}

else{
    alert('Its ok im not sure of my gender either');
}

*/

// counts right and wrong answers
var right = 0;
var wrong = 0;

/* converts answer to lowercase and truncates to single letter answer
function shrink(answer){
    answer.toLocaleLowerCase()
    if (answer === yes){
        answer = y;
    }
    else if(answer === no){
        answer = n;
    }; 
*/



// Asks User if they think I have Kids then logs the answer in console and converts answer to lowercase
var haveKids = prompt('do you think I have kids?');
console.log('the user guessed ' + haveKids + ' kids.' );
haveKids =haveKids.toLocaleLowerCase(); // make into function

// check to see if answer is yes or no changes to y or n 
if (haveKids === yes){
    haveKids = y;
}
else if(haveKids === no){
    haveKids = n;
};

//increments whether if the answer is right or wrong
if (haveKids === y){
    right ++
}
else{
    wrong ++
};




// Asks User if they think I like ice climbing then logs the answer in console
var iceClimb = prompt('Do you think that I like ice climbing?');
console.log('the user guessed ' + iceClimb + 'ice climbing.' );


// Asks User if they think I ride a vespa then logs the answer in console
var vespa = prompt('Do you think I ride a vespa?');
console.log('the user thinks ' + vespa + ' vespa rider')