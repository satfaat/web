// <script>

$(document).ready(function(){
  $("button").click(function(){
    $("h1").hide("slow");
    $("h2").show("fast");
    $("img").slideUp();
  });
});

// </script>

document.getElementsByTagName("p")[0].innerHTML = "Change the page.";
// vs
  $("p").html("Change the page");

for (i = 0; i <= 4; i++){
  document.getElementsByTagName("p")[i].innerHTML = "Change the page";
}
// vs
  $("p").html("Change the page");

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

// <script src="jquery-3.4.1.min.js"></script>
// CND # content delivery network
 /* Google CND
  <script src ="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
  </script>
*/
// <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 /* Microsoft CND:
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js">
    </script>
  */

  $(document).ready(function(){
    // jQuery methods go here ...
  });
  // vs 
    $(function(){
      // jQuery methods go here
    });

// the #id selector
  $("#test").hide();

// the .class selector
  $(".test").hide();

  $("ul li:first"). // selects the first <li> element of the first <ul>
  $("ul li:first:child") // selects the first <li> element of every <ul>
  $("[href]"). // selects all elements with an href attribute
  $("tr:even") // selects all even <tr> elements
  $("tr:odd") // selects all odd <tr> elements

// jQuery syntax for event methods
  $("p").click();

  $("p").click(function(){
    // action goes here
  });

//jQuery effects

$(document).ready(function(){
  $("button").click(function(){
    $("#dutysteps ol").toggle();
  });
});













