
function loadDoc(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xhttp.open("GET", "doc/cd_catalog.xml", true);
	xhttp.send();
}
