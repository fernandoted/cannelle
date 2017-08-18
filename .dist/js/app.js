/* JavaScript - Cannelle (http://github.com/fernandoted/cannelle)
   author: fernando ted
   http://fernandoted.com.br/ - http://github.com/fernandoted/ - http://takealook.com.br/
   07/02/2016 
*/

function initMap() {
	var cannelle = {lat: -23.442984, lng: -45.069235};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: cannelle
	});
	var marker = new google.maps.Marker({
		position: cannelle,
		map: map
	});
}