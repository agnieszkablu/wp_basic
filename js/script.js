/*
============ Bootstrap additional functions ===========
*/
( function( $ ) {
jQuery(function($) {
	//============ Bootstrap Nav Walker hover effect ===========
	if ($(window).width() >= 1200){	
		$('.navbar .dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

		}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

		});

		$('.navbar .dropdown > a').click(function(){
			location.href = this.href;
		});
			
		}
	
	//============ All images add two Bootstrap Classes ===========
	
	
	$( '.site-content img' ).not( '.img-responsive ' ).addClass( 'img-responsive center-block' );
});
} )( jQuery );


/*
============ Google Maps ===========
*/
function initMap() {
	var local = {lat: 48.7694086, lng: 11.400924300000042};
	
	 var customMapType = new google.maps.StyledMapType([
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

 var map = new google.maps.Map(document.getElementById('map'), {
			center: local,
			scrollwheel: false,
	 		draggable: false,
			zoom: 15,
			mapTypeControlOptions: {
			  mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
			}
  });
 // Create a marker and set its position.

  var iconSrc = {
	  path: 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z',
	  fillColor: 'black',
	  fillOpacity: 0.7,
	  scale: 1,
  };
  var marker = new google.maps.Marker({
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP,
	position: local,
	title: 'Herkommerstraße 16, 85057 Ingolstadt, Deutschland',
	icon: iconSrc
  });
 
		
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

}
