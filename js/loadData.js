$(function() {
  $("#titleAddress").html(newJson.address)
  $("#ML").html("ML#: " + newJson.ML)
  $("#price").html(newJson.price)
  $("#directions").html(newJson.directions)
  $("#landSize").html(newJson.landSize)
  $("#propertyType").html(newJson.propertyType)
  $("#neighbourhoodName").html(newJson.neighbourhoodName)
  $("#landSize").html(newJson.landSize)
  $("#parkingType").html(newJson.parkingType)
  $("#yearBuilt").html(newJson.yearBuilt)
  $("#detailsLink").prop("href", newJson.detailsLink)
  $("#description").html(newJson.description)

  window.myMap = function() {
    var pageId = localStorage.getItem("pageNumber")
    console.log(pageId)
    console.log(newJson)
    var locations = [
      ['41 WINDCREST COURT, Ottawa K2T 1B5',45.317018, -75.921626]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(45.317018, -75.921626),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }



})
