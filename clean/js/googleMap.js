 function initMap() {
     // Styles a map in night mode.
     var map = new google.maps.Map(document.getElementById('map'), {
         center: { lat: 47.229389, lng: 39.753851 },
         zoom: 16,
         scrollwheel: false,
         mapTypeControl: false,
         streetViewControl: false,
         zoomControl: false,
         styles: [{
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f5f5f5"
                 }]
             },
             {
                 "elementType": "labels.icon",
                 "stylers": [{
                     "visibility": "off"
                 }]
             },
             {
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#606060"
                 }]
             },
             {
                 "elementType": "labels.text.stroke",
                 "stylers": [{
                     "color": "#f5f5f5"
                 }]
             },
             {
                 "featureType": "administrative.land_parcel",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#bdbdbd"
                 }]
             },
             {
                 "featureType": "landscape.man_made",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "color": "#b9b9b9"
                 }]
             },
             {
                 "featureType": "poi",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#eeeeee"
                 }]
             },
             {
                 "featureType": "poi",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#505050"
                 }]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#e5e5e5"
                 }]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#505050"
                 }]
             },
             {
                 "featureType": "road",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                 }]
             },
             {
                 "featureType": "road.arterial",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#303030"
                 }]
             },
             {
                 "featureType": "road.highway",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#606060"
                 }]
             },
             {
                 "featureType": "road.highway",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#616161"
                 }]
             },
             {
                 "featureType": "road.local",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#606060"
                 }]
             },
             {
                 "featureType": "transit.line",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#606060"
                 }]
             },
             {
                 "featureType": "transit.station",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#eeeeee"
                 }]
             },
             {
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#c9c9c9"
                 }]
             },
             {
                 "featureType": "water",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#9e9e9e"
                 }]
             }
         ]
     });
     var myMark = {
         path: "M306,364.5a23.56,23.56,0,0,0-23.5,23.63c0,13,19.58,39.37,23.5,39.37s23.5-26.33,23.5-39.37A23.56,23.56,0,0,0,306,364.5Zm0,39.37a15.75,15.75,0,1,1,15.67-15.75A15.73,15.73,0,0,1,306,403.87Z",
         fillColor: '#f7d846',
         fillOpacity: 1,
         anchor: new google.maps.Point(300, 400),
         strokeWeight: 0,

     };

     var marker = new google.maps.Marker({
         position: { lat: 47.229389, lng: 39.753851 },
         map: map,
         icon: myMark
     });

     var InfoWindow = new google.maps.InfoWindow({
         content: 'Компания Чистый дом'
     });

     InfoWindow.open(map, marker);

     marker.addListener('click', function() {
         InfoWindow.open(map, marker);
     });


 }