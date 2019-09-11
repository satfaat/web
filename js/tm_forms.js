function validateForm() {
    var f_el = document.forms["form_1"]["fname"].value;
    if (f_el == "") {
      //alert("Name must be filled out");
      alert("Заполните поле");
      return false;
    }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//<button class="open-button" onclick="openForm()">Open Form</button> (html)
//<button type="button" class="btn cancel" onclick="closeForm()">Close</button> (html)