// //Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:
const num1 = 50;
const num2 = 51;
const sum = num1 + num2;
// sum + " is greater than 100";
if (sum > 100) {
	console.log(sum + ' is greater than 100');
}
// sum + " is larger than 0";
else if (sum > 0) {
	console.log(sum + ' is larger than 0');
}
// sum + " is equal to 0";
else if (sum === 0) {
	console.log(sum + ' is equal to 0');
}
// sum + " is a negative number";
else if (sum < 0 && sum > -1000) {
	console.log(sum + ' is a negative number');
}
// sum + " is less than -1000";
else if (sum < -1000) {
	console.log(sum + ' is less than -1000');
}
