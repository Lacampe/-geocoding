import GMaps from 'gmaps/gmaps.js';

const mapElement = document.getElementById('map');

if (mapElement) { // don't try to build a map if there's no div#map to inject in
  const map = new GMaps({ el: '#map', lat: 0, lng: 0 });
  const markers = JSON.parse(mapElement.dataset.markers);
  map.addMarkers(markers);


  if (markers.length === 0) {
    map.setZoom(2);
  } else if (markers.length === 1) {
    map.setCenter(markers[0].lat, markers[0].lng);
    map.setZoom(14);
  } else {
    map.fitLatLngBounds(markers);
  }

  const styles = [
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#333739"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2ecc71"
              }
          ]
      },
      {
          "featureType": "poi",
          "stylers": [
              {
                  "color": "#2ecc71"
              },
              {
                  "lightness": -7
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2ecc71"
              },
              {
                  "lightness": -28
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2ecc71"
              },
              {
                  "visibility": "on"
              },
              {
                  "lightness": -15
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2ecc71"
              },
              {
                  "lightness": -18
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2ecc71"
              },
              {
                  "lightness": -34
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#333739"
              },
              {
                  "weight": 0.8
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "color": "#2ecc71"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#333739"
              },
              {
                  "weight": 0.3
              },
              {
                  "lightness": 10
              }
          ]
      }
  ]

  map.addStyle({
    styles: styles,
    mapTypeId: 'styled_map'
  });

  map.setStyle('styled_map');

}

