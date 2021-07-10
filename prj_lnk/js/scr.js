/*'use strict'*/

/* INCLUDE */ 
var title = (document.body.id !="") ? title = document.body.id + " " + navigator.onLine : title = "No title ";

const meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'];
const linkcss = [
    "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'>",
    "<link rel='stylesheet' href='../../cssLib/remedy.css'/>",
    "<link rel='stylesheet' href='css/style.css'/>"];
const linkjs = [    
    '<script src="js/site.js"></script>'];
const linkjsLib = ['<script src="https://www.w3schools.com/lib/w3.js"></script>',
                    '<script src="https://cdn.jsdelivr.net/npm/vue"></script>',
                    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>',
                    '<noscript>You need to enable JavaScript to view the full site.</noscript>',
                    '<script src="js/modernizr.js"></script>'];

    // run function in HEAD
function addToHead(title, meta, linkcss){
    return "<title>"+title+"</title>" + meta.concat(linkcss, linkjsLib).join('');
}; document.head.insertAdjacentHTML('beforeend', addToHead(title, meta, linkcss));

  // function to add content in FOOTER
function addToFooter(linkjs){
    return linkjs.join('');
}; document.getElementById("htmFooter").insertAdjacentHTML('beforeend', addToFooter(linkjs));

function includeHTML() {
    let z, i, elmnt, file, xhttp;

/*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
/*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
/*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        console.log("call include HTML");
        return; /*exit the function:*/
      }
    }
  };includeHTML();

/*w3.includeHTML();*/
/* END OF INCLUDE */

/*API: file read*/

// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

/*** tab links ***/
function open_tab(evt, tab_name) {
    let i, tab_content, tab_links;

    tab_content = document.getElementsByClassName("tab-content");
    console.log(tab_content);
    /*for (item in tab_content){
        tab_content[item].style.display = "none";
    }*/
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    tab_links = document.getElementsByClassName("tab-lnks");
    console.log(tab_links);
    /*for (item in tab_links) {
        tab_links[item].className.replace(" active", "");
    }*/
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].className.replace(" active", "");
    }

    document.getElementById(tab_name).style.display = "grid";
    evt.currentTarget.className += " active";
}

/* MENU */
    function openNav() {
        document.getElementById("nav-overlay").style.height = "100%";
        console.log("clicked to open");
    }
    /* Close */
    function closeNav() {
        document.getElementById("nav-overlay").style.height = "0%";
        console.log("clicked to close");
    }

