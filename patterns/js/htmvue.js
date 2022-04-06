var title = ['start', 'docs', 'ssi', 'contacts', 'social', 'test'];

var meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
    ];
var linkcss = [
    "<link rel='stylesheet' href='http://www.w3schools.com/lib/w3.css'>",
    "<link rel='stylesheet' href='css/s1.css'>"
    ];
var linkjs = [
    '<script src="js/modernizr.js"></script>',
    '<script src="js/mainmenu.js"></script>',
	  '<script src="js/clock.js"></script>'
    ];

/*
<html>
  <head>
  </head>

  <body>
  </body>

</html>
*/

// run function in <head>
document.head.innerHTML = head(headTitle, meta, linkcss);
// run function in <footer>
document.getElementById("footer").innerHTML = footer(linkjs);

function head(title, meta, linkcss){
  return "<title>"+title+"</title>" + meta.concat(linkcss) + "</head>";
};

function footer(linkjs){
  return linkjs + "<p>life is life</p></footer>";
};
