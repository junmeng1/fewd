console.log('sanity check');

$(document).ready(function(){
  $.ajax({
    method: 'GET',

    // The URL for the request
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    //?format=json

    // The type of data we want back
    dataType: 'json',

    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    success: onSuccess
  })
})

function onSuccess(responseData){
  console.log(responseData);
  var show1 = JSON.stringify(responseData.features[1].properties.title);
  var show2 = JSON.stringify(responseData.features[1].properties.mag);
  var show3 = JSON.stringify(responseData.features[1].geometry.coordinates[0]);
  var show4 = JSON.stringify(responseData.features[1].geometry.coordinates[1]);
  $('#container').append(`<div>`+ "name: "+show1 +`</div>`).append(`<div>`+ "magnitude: "+show2 +`</div>`).append(`<div>`+ "longitude: "+show3 +`</div>`).append(`<div>`+ "latitude: "+show4 +`</div>`);
  

  // displayData1 = JSON.stringify(displayData.split(',').join(', '));
  // var displayData = JSON.stringify(responseData);
}

