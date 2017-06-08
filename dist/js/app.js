/* JavaScript - Cannelle (http://github.com/fernandoted/cannelle)
   author: fernando ted
   http://fernandoted.com.br/ - http://github.com/fernandoted/ - http://takealook.com.br/
   07/02/2016 
*/

// map
function initMap() {
	var cannelle = {lat: -23.442984, lng: -45.069235};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: cannelle
	});
	var marker = new google.maps.Marker({
		position: cannelle,
		map: map
	});
}
// scroll
$(document).ready(function() {
    // add scroll to body tag
	$('body').scrollspy({target: '.nav', offset: 50});
	
	// add smooth scrolling on menu links
	$('#top-nav a').on('click', function(event) {
		if (this.hash !== "") {
			// prevent default anchor click behavior
			event.preventDefault();
			// store hash
			var hash = this.hash;
			//jQuery animate
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // end if
	});
});