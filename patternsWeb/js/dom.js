document.getElementsById("footer").innerHTML = footer();
function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}
