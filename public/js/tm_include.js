/*var title = ['start', 'docs', 'ssi', 'contacts', 'social', 'test'];*/
/*if (document.body.id !=""){
  var title = document.body.id;
} else {title = "No title";}*/
/*navigator.onLine;*/
var title = (document.body.id !="") ? title = document.body.id : title = "No title";
var meta = [
    '<meta charset="UTF-8">',
    '<!--saved from url=(0014)about:internet-->',
    '<!--responsive web pages-->',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'];
var linkcss = [
    "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'/>",
    "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Raleway' />",
    "<link rel='stylesheet' href='css/own.css'/>"];
var linkjs = [    
    '<script src="js/mainmenu.js"></script>',
	  '<script src="js/clock.js"></script>'];
var linkjsLib = ['<script src="https://www.w3schools.com/lib/w3.js"></script>',
                  '<script src="https://cdn.jsdelivr.net/npm/vue"></script>',
                  '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>',
                  '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>',
                  '<script src="js/modernizr.js"></script>'];
//w3.includeHTML();

    // run function in <head>
//document.head.innerHTML = addToHead(title[5], meta, linkcss);
function addToHead(title, meta, linkcss){
    return "<title>"+title+"</title>" + meta.concat(linkcss, linkjsLib).join('');
};
  document.head.insertAdjacentHTML('beforeend', '<p>My new paragraph</p>');
  document.head.insertAdjacentHTML('beforeend', addToHead(title, meta, linkcss));
  //document.head.insertAdjacentHTML('beforeend', addToHead(title[5], meta, linkcss));
  //alert(addToHead(title[0], meta, linkcss));
  console.log('Here\'s a hidden message');

  // function to add content in footer
function addToFooter(linkjs){
  return linkjs.join('') + "<p>life is life</p></footer>";
}; 
  //document.getElementById("htmFooter").innerHTML = addToFooter(linkjs);
  //document.getElementsByClassName("htmFooter").insertAdjacentHTML('beforeend', addToFooter(linkjs));
  //document.getElementsByClassName("htmFooter").innerHTML = addToFooter(linkjs);
  document.getElementById("htmFooter").insertAdjacentHTML('beforeend', addToFooter(linkjs));

// add main menu

function mainMenu(){
  var menu = [
    '<nav class="mainmenu"><ul>',
    '<li><a href="index.htm">Home</a></li>',
		'<li><a href="tst.htm">test</a></li>',
		'<li><a href="contacts.htm">Contacts</a></li>',
		'<li><a href="links.htm">Links</a></li>',
		'<li><a href="about.htm">About</a></li>',
    '</ul></nav>'];
      return menu.join();
}; document.getElementsById("mmenu").innerHTML = mainMenu();
/* END of main menu */

 // test
var my = new Vue({
  el: '#msg',
  data: {
    message: 'Hello Vue3!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

$(document).ready(function(){

});
