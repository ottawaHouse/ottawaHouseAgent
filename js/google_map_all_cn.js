window.myMap = function() {
  var locations = [
    ['41 WINDCREST COURT, Ottawa K2T 1B5', 45.317018, -75.921626, 1057553],
    ['116 THORNBURY CRESCENT, Ottawa K2G 6C2', 45.347138, -75.769445, 1062796]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(45.423602, -75.7008956),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    // localStorage.setItem('pageNumber', locations[i][3]);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      mapid: locations[i][3]
    });

    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        localStorage.setItem('pageNumber', marker.mapid);
      }
    })(marker, i));

    marker.addListener('click', function() {
      window.location.href = "propertyDetails-cn.html";
    });
  }
}
