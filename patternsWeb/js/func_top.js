var print_lg = (txt) => { console.log(txt); } // for all
    //print_lg ("Some text");

var name = prompt("name");
    say_hello_to = (name) => alert("Hello " + name + "! ");
        //say_hello_to(name);

var random_words = ["Planet","Worm","Flower"];
    var pick_random_word = (words) => {return words [ Math.floor( Math.random() * words.length ) ];}
        //print_lg( pick_random_word(random_words) );

/* MATH */

var to_celsius = (fahrenheit) => {return (5 / 9) * (fahrenheit - 32);}
    //console.log(to_celsius(30));

function factorial(n) {
    if (n == 0) {
        return 1;
    } else { return factorial(n - 1) * n; }
} console.log(factorial(5) + " ");