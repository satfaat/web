var func = function () { console.log("Hello world!"); } // old
hello = function() {return "Hello function"}
//vs 
hello = () => {return "Hello arrow function"} // arrow function
  console.log(hello());

var arrow_func = () => {console.log('New function, ES6')}
  arrow_func();

function (a=1, b=1) { // function code }

  var x = a => a + 1; // arrow function
    x(4) // returns 5

// run function in <footer>
document.getElementById("footer").innerHTML = footer();
  function footer(){
    var fcon = document.querySelector('footer');
    fcon.textContent = "<p>life is life</p>" + "</footer>";
    return fcon.textContent;
  }

function sum (number){
  let y = number + number;
  console.log(number + '+' + number);
  return y;
} console.log(sum(5));

var number = prompt("Input a number: "); // output string
function sum (number){
  alert(typeof number);
  x = Number(number)
  let y = x + x;
  console.log(x + '+' + x);
  return y;
} console.log(sum(number));

var number = prompt("Input a number: ");
function sum (number){
  alert(typeof number);
  let y = Number(number)
  y += y;
  return y;
} console.log(sum(number));

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

function myFunction (x, y) {
  if (y === undefined) { y = 0; }
}

function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeOverflow) {
    txt = "Value too large";
  } else { txt = "Input OK"; } document.getElementById("demo").innerHTML = txt;
}

function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}

var myWindow;
function openWin() {
  myWindow = window.open("", "", "width=400, height=200");
  myWindow.blur();
}
function blurWin() {
  myWindow.blur();
}
function focusWin() {
  myWindow.focus();
}
<input type="button" value="Open new window" onclick="openWin()">
<input type="button" value="Blur new window" onclick="blurWin()">
<input type="button" value="Focus new window" onclick="focusWin()">