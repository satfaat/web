/*
arguments await break case catch class const continue debugger default 
delete do else enum eval export extends false finally for function if 
implements import in Infinity instanceof interface let NaN new null package 
private protected public return static super switch this throw true try 
typeof undefined var void while with yield
*/

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

/*
statements
looping
conditionals
*/

/*BOOLEN DATA TYPE*/
// ======
true;
false;
true && false;

/*booleans*/
var js = true;
js;

/*
&& and
|| or
! not
*/

var stringNum="5";
var num=5;
stringNum === num; //false
stringNum == num; // true

var age = 12;
var accompained = true;
var go = 13;

age >= go;
accompained || age >= go === true;
// ++++++
// END BOOLEN


//NUMBERS
//======

var age = 26;
age = age +1;
//or
age += 1;
//or
age ++;

var highFives=0;
++highFives; //1
++highFives; //2
++highFives; //3

highFives++ //0
highFives++ //1
highFives; //2

var score=10;
score +=7; // score+7
score -=3; // score-7

//++++++
//END NUMBERS

/* Constants */

const JOE = 4.0
JOE = 3.5
document.write(JOE)

function print (arg){
    return document.write(arg)
}

/* Block-scoped variables and functions */
{
    let x = "hello";
    {
      let x = "world";
      console.log("inner block, x = " + x);
    }
    console.log("outer block, x = " + x);
}
  // prints
  inner block, x = world
  outer block, x = hello

  {
    let x = "hello";
    {
      const x = 4.0;
      console.log("inner block, x = " + x);
      try {
        x = 3.5
      } catch(err) {
        console.error("inner block: " + err);
      }
    }
    x = "world";
    console.log("outer block, x = " + x);
  }
  // prints
  inner block, x = 4
  inner block: TypeError: Assignment to constant variable.
  outer block, x = world