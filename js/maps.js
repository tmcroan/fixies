function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 38.233865, lng: -85.711899},
          zoom: 18
        });
                   }


function initialize() {

  // Create an array of styles.
  var styles = [
      
        {
            "featureType": "landscape",
            "stylers": [
              { "color": "#999999" },
              { "lightness": 30 }
            ]
          },{
            "featureType": "poi",
            "stylers": [
              { "visibility": "off" }
            ]
          },{
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              { "color": "#006f6f" },
              { "lightness": 19 }
            ]
          },{
            "featureType": "transit",
            "stylers": [
              { "visibility": "off" }
                       ]
            }
  
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(55.6468, 37.581),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}