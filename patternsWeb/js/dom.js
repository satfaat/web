var hcon = document.querySelector('head');
hcon.textContent = title + meta + lcss + '</head>';
return hcon.textContent;

document.getElementsById("footer").innerHTML = footer();
function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}
