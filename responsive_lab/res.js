$("#hamburger").click(function(event){
	event.preventDefault();
	$(".ham").hide();
	$("nav").toggle();
})