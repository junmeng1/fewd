// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  $.ajax({
    method: 'GET',

    // The URL for the request
    url: weekly_quakes_endpoint,
    //?format=json

    // The type of data we want back
    dataType: 'json',

    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    success: onSuccess
  })
});

function onSuccess(responseData){
  console.log(responseData);

  for (var i =0; i<responseData.features.length; i++){
    
    var magnitude = JSON.stringify(responseData.features[i].properties.mag);
    var place = JSON.stringify(responseData.features[i].properties.place);
    // var updated=responseData.features[i].properties.updated;
    var time=responseData.features[i].properties.time;
    var time_diff = Date.now()-time;
    // typeof time;
    // console.log("type");
    // console.log(typeof time);
    $('#info').append('<div>'+'M '+'-'+magnitude+'of'+place+' / '+time_diff/3600+' hours ago'+'</div>');
  }

  //Map
  var map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 37.78, lng: -122.44},
       zoom: 8

   });
   console.log(map);
  

  // var show1 = JSON.stringify(responseData.features[1].properties.title);
  // var show2 = JSON.stringify(responseData.features[1].properties.mag);
  // var show3 = JSON.stringify(responseData.features[1].geometry.coordinates[0]);
  // var show4 = JSON.stringify(responseData.features[1].geometry.coordinates[1]);
  // $('#container').append(`<div>`+ "name: "+show1 +`</div>`).append(`<div>`+ "magnitude: "+show2 +`</div>`).append(`<div>`+ "longitude: "+show3 +`</div>`).append(`<div>`+ "latitude: "+show4 +`</div>`);
  

  // displayData1 = JSON.stringify(displayData.split(',').join(', '));
  // var displayData = JSON.stringify(responseData);
}