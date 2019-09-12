const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener("resize", function() {
	console.log(window.innerWidth);
	if(window.innerWidth <= 992){
 		navbar.classList.add('bg-primary');
	}else{
		navbar.classList.remove('bg-primary');
	}
});