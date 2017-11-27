//Don't need document.ready() since script tags are at the end of the file
//Intake a value from user
$("#submit-btn").click(function(event){
    event.preventDefault();
    var city = $("#city-type").val();
    changebg(city.trim());//trim function gets rid of trailing spaces
    //$('form').attr('placeholder', "Enter a city name...");//why doesn't this work?
    $('form')[0].reset();
})



//Change the background depends on the input
function changebg(city){
	if (city === "New York"||city === "New York City"||city === "NYC") {
		$("body").addClass('nyc');
	}
	if (city === "San Francisco"||city ==="SF"|| city ==="Bay Area") {
		$("body").addClass("sf");
	}
	if (city === "Los Angeles"||city === "LA"||city === "LAX") {
		$("body").addClass("la");
	}
	if (city === "Austin"|| city === "ATX") {
		$("body").addClass("austin");
	}
	if (city === "Sydney"|| city === "SYD") {
		$("body").addClass("sydney");
	}
}

