var func = function(){
  console.log("Hello world!");
}

var sayHelloTo = function(name){
  console.log("Hello " + name +"!");
};

var name =  prompt("name");
var sayHelloTo = function(name){
  console.log("Hello " + name +"!");
};

var randomWords = ["Planet","Worm","Flower"];
var pickRandomWord = function(words){
  return words[Math.floor(Math.random()*words.length)];
};
pickRandomWord(randomWords);

/*function head(){
	var title = "<title>main start</title>";
  var meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
    ];
  var linkcss = [
    "<link rel='stylesheet' href='http://www.w3schools.com/lib/w3.css'>",
    "<link rel='stylesheet' href='css/s1.css'>"
    ];
  return title + meta.concat(linkcss) + '</head>';
}*/


// run function in <footer>
document.getElementById("footer").innerHTML = footer();

function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}


document.getElementById("footer").innerHTML = footer();
function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}

/*var hcon = document.querySelector('head');
hcon.textContent = title + meta + lcss + '</head>';
return hcon.textContent;*/

var factorial = function(number){
  y = number + number;
  console.log(number + '+' + number);
  return y;
}
factorial(5);

var factorial = function(number){
  var result = 1;
    while(number >= 1){
      result = result * number;
      number--;
      console.log(result + '=' + result + '*' + number);
    }
    return result;
}
factorial(5);

/*function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p></footer>";
	return fcon.textContent;
}*/
