'use strict'

/* INCLUDE */ 
var title = (document.body.id != "") ? title = document.body.id + " " + navigator.onLine : title = "No title ";



var meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'];
var linkcss = [
    "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'>",
    "<link rel='stylesheet' href='css/own.css'/>"];
var linkjs = [    
    '<script src="js/mainmenu.js"></script>',
    '<script src="js/clock.js"></script>',
    '<script src="js/effects.js"></script>'];
var linkjsLib = ['<script src="https://www.w3schools.com/lib/w3.js"></script>',
                    '<script src="https://cdn.jsdelivr.net/npm/vue"></script>',
                    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>',
                    '<noscript>You need to enable JavaScript to view the full site.</noscript>',
                    '<script src="js/modernizr.js"></script>'];

    // run function in HEAD
function addToHead(title, meta, linkcss){
    return "<title>" + title + "</title>" + meta.concat(linkcss, linkjsLib).join('');
}; document.head.insertAdjacentHTML('beforeend', addToHead(title, meta, linkcss));

  // function to add content in FOOTER
function addToFooter(linkjs){
    return linkjs.join('');
}; document.getElementById("htmFooter").insertAdjacentHTML('beforeend', addToFooter(linkjs));

var add_to_footer = (linkjs) => { return linkjs.join(''); }
    document.getElementById("htmFooter").insertAdjacentHTML( 'beforeend', add_to_footer(linkjs) );

//w3.includeHTML();
/* END OF INCLUDE */