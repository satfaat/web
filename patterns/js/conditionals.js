  var nm= false;
  var beef = false;
  var sweet = false;

if (nm) {
  console.log("Great! I'm having nm");
} else if (beef){
  console.log("I'm having the beef");
} else if (sweet){
  console.log("ok, i'll have sweet");
} else {
    console.log("Well, i guess i'll have rice then");
}

console.log("Hello " + name);
  if (name.length > 7){
    console.log("Wow, you have a really long name!");
  } else {
    console.log("Your name isn't very long.");
  }

if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;