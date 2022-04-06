function display_links(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br>';
  }
  document.querySelector("#id01").innerHTML = out;
}