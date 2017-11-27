$(document).ready(function(){ 
  $('.readmore').click(function(event){
  	event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    }) 

    $('.readless').click(function(event){
      event.preventDefault();
      $('#show-this-on-click').slideUp();
      $('.readmore').show();
      $('.readless').hide();
    })
    
    $('.learnmore').click(function(event){
      event.preventDefault();
      $('#learnmoretext').slideDown();
      $('.learnmore').hide();
    });
});

