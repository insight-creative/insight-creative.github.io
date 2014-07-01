// On document ready:

jQuery(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp({
  	animation: {
  		duration: 300,
  		effects: 'fade',
  		easing: 'ease'
  	}
	});
  
  // Make mobile filter work

  $('#small-filter').on('change', function() { 
     $('#Container').mixItUp('filter',this.value);
  });

});