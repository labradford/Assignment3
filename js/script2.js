//ASSIGNMENT 3, PART 2

// STEP 1 The Rock, Paper, Scissors Game

/*
// collect and verify user input
var user = prompt('Welcome to Rock, Paper Scissors. Please make your pick: rock, paper, or scissors');
	if (user.toLowerCase() === 'rock' || user.toLowerCase() === 'paper' || user.toLowerCase() ==='scissors') {
	} else {
		user = prompt('That is not a valid entry, Please choose rock, paper or scissors.');
	}
	if (user.toLowerCase() === 'rock' || user.toLowerCase() === 'paper' || user.toLowerCase() ==='scissors') {
	} else {
		alert('That is not a valid entry.');
	}

// computer randomly makes a choice
var x = Math.floor(Math.random()*3)+1;
//1 == rock, 2==paper, 3==scissors
var comp;
 switch (x) {
 	case 1:
 	comp = 'rock';
 	break;
 	case 2: 
 	comp = 'paper';
 	break
 	default: 
 	comp = 'scissors';
 }

 //calculating result
 var result;
 
 if (user.toLowerCase() === comp) {
  	result = 'tie';
 } else if (user.toLowerCase() === 'rock' && comp === 'paper') {
 	result = 'lose';
 } else if (user.toLowerCase() === 'rock' && comp === 'scissors') {
 	result = 'win';
 } else if (user.toLowerCase() === 'paper' && comp === 'scissors') {
 	result = 'lose';
 } else if (user.toLowerCase() === 'paper' && comp === 'rock') {
 	result = 'win';
 } else if (user.toLowerCase() === 'scissors' && comp === 'paper') {
 	result = 'win';
 } else if (user.toLowerCase() === 'scissors' && comp === 'rock'){
 	result = 'lose';
 } else {
 	result = 'GAME OVER!'
 }
 //display win or lose message 
if (result === 'tie') {
	alert('You chose ' + user + ' and the computer chose ' + comp + '. The game is a tie!');
} else if (result === 'lose') {
	alert('Bummer, you chose ' + user + ' and the computer chose ' + comp + '. You ' + result +'.');
} else if (result === 'win') {
	alert('Congratulations, you chose ' + user + ' and the computer chose ' + comp + '. You ' + result +'.');
} else {
	alert('You did not enter a valid choice. ' + result);
}
*/

// STEP 2 The Basic Calculator 
/*
var num1 = prompt('Enter a number');
var num2 = prompt('Enter another number');
var op = prompt('Enter an operator: +, -, * or /');
if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
		alert('That is not a valid entry.');
		}  
var calculate = function(num1, num2, op) {
	var x = Number(num1);
	var y = Number(num2);
	//var operator;
	var result;
	switch (op) {
		case '+' :
		result = (x + y);
		break;
		case '-' :
		result = (x - y);
		break;
		case '*' :
		result = (x * y);
		break;
		case '/' :
		result = (x / y);
		break;
		default :
		result = 'not valid. Please refresh the page and start again';
	}
	alert('The answer is ' + result);
}
calculate(num1,num2,op);
*/

// STEP 3  Death by JavaScript 

// PART 1	ALPHABETICAL SORT
/*
var alpha = function(input) {
	var sorted = (input.match(/[\S]/g));
	sorted = sorted.sort();
	sorted = sorted.join('');
	return sorted;
}
console.log(alpha('webmaster'));
console.log(alpha('the quick brown fox jumps over the lazy frog'));
*/

// PART 2	CAPITALIZE THE FIRST LETTER
/*
var capitalize = function(input) {
	//separate the sentence into words
	input = input.split(' ');	

	//loop through the input
	for (i = 0; i < input.length; i++) {
		//separate each word into letters
		input[i] = input[i].split('');
		//take first letter of each word and apply toUpperCase();
		input[i][0] = input[i][0].toUpperCase();
		//join letters back into words
		input[i] = input[i].join('');
	}
	//join words back into sentences and add a space between
	input = input.join(' ');
	return input;
}

console.log(capitalize('the quick brown fox jumped over the lazy dog'));
*/


// PART 3 FIND THE VOWELS
/*
var vowels = function(input) {
	input = (input.match(/[aeiouAEIOU]/g));
	return input.length;
}

console.log(vowels('The quick brown fox jumped over the lazy dog'));
*/

// PART 4	CREATE A RANDOM STRING
/*		
var randomCharacters = function() {
    var string = ''; 
    var selection = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&{}[]';
    for (var i = 0; i < 8; i++) {
    	string += selection.charAt(Math.floor(Math.random() * 73));
    }
    return string; 
}

console.log(randomCharacters());
*/

//PART 5	FIND THE LONGEST
/*
var longestCountry = function(countries) {
	var maxLen = countries[0];
	for (var i = 0; i < countries.length; i++) {
		if (maxLen.length < countries[i].length) {
			maxLen = countries[i];
			return maxLen;
		}
	}
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]));
console.log(longestCountry(["Canada", "Mexico", "Brazil","United Kingdom"]));
*/
