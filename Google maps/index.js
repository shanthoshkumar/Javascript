let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.7041, lng: 77.1025},
    zoom: 8,
  });
  new google.maps.marker({
    position: {lat: 28.7041, lng: 77.1025}
  })
}

window.initMap = initMap;

// Listening to events
// https://developers.google.com/maps/documentation/javascript/examples/rectangle-event#maps_rectangle_event-javascript