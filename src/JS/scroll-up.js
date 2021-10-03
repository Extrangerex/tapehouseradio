// Initial visibility set to "none"
 
const arrowUp = document.getElementById("arrow-up");
 
arrowUp.style.display = "none";
 
 
 
// Visibility set to "block" when scrolling
 
window.addEventListener("scroll", function(){
 
	if(window.scrollY > 1000){
 
		arrowUp.style.display = "block";
	}
	else{
 
		arrowUp.style.display = "none";
	}
}, false);
