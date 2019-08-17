var title = ['start', 'docs', 'ssi', 'contacts', 'social', 'test'];
var meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
    ];
var linkcss = [
    "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'>"

    ];
var linkjs = [
    '<script src="js/modernizr.js"></script>',
    '<script src="js/mainmenu.js"></script>',
	  '<script src="js/clock.js"></script>'
    ];

// run function in <head>
document.head.innerHTML = head(title[0], meta, linkcss);
// run function in <footer>
document.getElementById("footer").innerHTML = footer(linkjs);

function head(title, meta, linkcss){
  return "<title>"+title+"</title>" + meta.concat(linkcss) + "</head>";
};

function footer(linkjs){
  return linkjs + "<p>life is life</p></footer>";
};

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
