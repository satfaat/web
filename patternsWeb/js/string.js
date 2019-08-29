/*String manipulation*/

document.write("this is the first line\n And this is the second\n");
document.write("con" + "cat" + "e" + "nate\n");
document.write(`half of 100 is ${100 / 2}\n`);

//Getting the length of a string
/*finding the length of a string*/
some.length;
"long text".length;

/*getting a single character from a string*/
var myName="Bob";
myName[0];
myName[1];
myName[2];

/*cutting up string*/
"a string".slice(1,5); // 1 is start of the slice, 2 is end of the slice

// look for the position
"I am a string.".indexOf("am");

/*cutting up string*/
"a string".slice(1,5);

// 1 is start of the slice, 2 is end of the slice
"this is a long string".slice(0,4);

/* String templating */

var name = "joe";
var x = `hello ${name}`
// returns "hello joe"

// define an arrow function
var f = a => a * 4

// set a parameter value
var v = 5

// and evaluate the function within the string template
var x = `hello ${f(v)}`
// returns "hello 20"

var x = `hello world
next line`
// returns
hello world
next line