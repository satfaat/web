function print_log(txt){
  console.log(txt);
}

var func = function(){
  console.log("Hello world!");
} // old

var sayHelloTo = function(name){
  console.log("Hello " + name +"!");
}; // old

var name =  prompt("name");
var sayHelloTo = function(name){
  console.log("Hello " + name +"!");
};

function say_hello_to(name){
  console.log('Hello ' + name + "! ");
} say_hello_to("One"); // new

var name =  prompt("name");
function say_hello_to(name){
  console.log('Hello ' + name + "! ");
} say_hello_to(name); // new with prompt

var randomWords = ["Planet","Worm","Flower"];
var pickRandomWord = function(words){
  return words[Math.floor(Math.random()*words.length)];
};
//pickRandomWord(randomWords);
console.log(pickRandomWord(randomWords));

var random_words = ["Planet","Worm","Flower"];
function pick_random_word(words){
  return words[Math.floor(Math.random() * words.length)];
} console.log(pick_random_word(random_words)); // new
print_log(pick_random_word(random_words));

// run function in <footer>
document.getElementById("footer").innerHTML = footer();
function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}

var number = prompt("Input a number: "); // output string
function sum (number){
  let y = number + number;
  console.log(number + '+' + number);
  return y;
} console.log(sum(5)); console.log(sum(number));

function factorial(number){
  var result = 1;
  while(number >= 1){
    result = result * number;
    number--;
    console.log(result + '=' + result + '*' + number);
  }
  return result;
} console.log(factorial(5));

function constScope(){
  for(let i = 0; i < arguments.length; i++){
    const OUTPUT = arguments[i];
    console.log(OUTPUT);
  }
} constScope('first', 'second');

function hobby_comparer(my_hobbies, ...your_hobbies){
  for (var your_hobby of your_hobbies){
    if (my_hobbies.indexOf(your_hobby) === -1){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
  var my_hobbies = ['volleyball', 'painting', 'fishing'];
  hobby_comparer(my_hobbies, 'volleyball', 'painting');

/* ARROW functions */
var x = a => a + 1;
x(4) // returns 5

function(x, y) { return x + y;} //ES5
(x, y) => x + y //ES6

[1, 2, 3, 4].forEach(a => console.log(a + " => " + a*a))
// prints
/*1 => 1
2 => 4
3 => 9
4 => 16*/

[22, 98, 3, 44, 67].sort((a, b) => a - b)
// returns
[3, 22, 44, 67, 98]

/* Default function parameters */

var x = (a, b = 1) => a * b
x(2)
// returns 2
x(2, 2)
// returns 4

var x = (a = 2, b) => { return a * b }
x(2)
// returns NaN
x(1, 3)
// returns 3
x(undefined, 3)
// returns 6

/* Rest functions parameters */

var x = function(a, b, ...args) { console.log("a = " + a + ", b = " + b + ", " + args.length + " args left"); }
x(2, 3)
// prints
/*a = 2, b = 3, 0 args left
x(2, 3, 4, 5)*/
// prints
/*a = 2, b = 3, 2 args left*/
