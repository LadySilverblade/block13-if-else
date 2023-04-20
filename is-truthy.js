//test truthy value of "I am a string"
let testString = 'I am a string';
// if value of testString is undefined, print "undefined is falsy"
if (!testString) {
	console.log('undefined is falsy');
}
// if value of testString is true, print "true"
else if (testString && testString === 'I am a string') {
	console.log('true');
}
// if value of testString is false, print "The boolean value false is falsy"
else if (testString && testString === false) {
	console.log('The boolean value false is falsy');
}
//if value of testString is null, print "The null value is falsy"
else if (testString && testString === null) {
	console.log('the null value is falsy');
}
//if value of testString is 0, print "The number 0 is falsy (the only falsy number)"
else if (testString && testString === 0) {
	console.log('The number 0 is falsy (the only falsy number)');
}
// if the value of testString is '' (empty string), print "The empty string is falsy (the only falsy string)"
else if (testString && testString === '') {
	console.log('The empty string is falsy (the only falsy string)');
}
