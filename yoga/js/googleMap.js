 function initMap() {
     // Styles a map in night mode.
     var map = new google.maps.Map(document.getElementById('map'), {
         center: { lat: 47.229389, lng: 39.753851 },
         zoom: 16,
         scrollwheel: false,
         mapTypeControl: false,
         streetViewControl: false,
         zoomControl: false,
         
     });
     var myMark = {
         path: "M273.6,141.8L273.6,141.8c-8.8,0-15.9,7.2-15.9,15.9s9.9,30.2,15.9,36.1c5.3-5.3,15.9-27.4,15.9-36.1    S282.4,141.8,273.6,141.8z M273.6,171.5c-2.3-2.3-6.1-10.5-6.1-13.9c0-3.4,2.8-6.1,6.1-6.1l0,0c3.4,0,6.1,2.8,6.1,6.1    C279.8,161,275.7,169.5,273.6,171.5z",
         fillColor: '#FF6666',
         fillOpacity: 1,
         anchor: new google.maps.Point(300, 150),
         strokeWeight: 0,

     };

     var marker = new google.maps.Marker({
         position: { lat: 47.229389, lng: 39.753851 },
         map: map,
         icon: myMark,
         animation: google.maps.Animation.DROP
     });

     var InfoWindow = new google.maps.InfoWindow({
         content: 'Йога-Центр<br>город Ростов-на-Дону<br>ул. Советская, 3а<br>+7 (863) 333-33-33'
     });

     InfoWindow.open(map, marker);

     marker.addListener('click', function() {
         InfoWindow.open(map, marker);
     });


 }