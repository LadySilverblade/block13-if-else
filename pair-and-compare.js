//Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.
const param1a = 'five';
const param1b = 5;
const param2a = 'dog';
const param2b = 'dawg';
//if one set of param is true print true if not print false
if (param1a === param1b || param2a === param2b) {
	console.log(true);
} else {
	console.log(false);
}
