console.log('this is a test message');
const mapboxgl = require('mapbox-gl');
const markers = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3VtZ29va2kiLCJhIjoiY2s2bGs3aGpjMGR6NjNsbzc4MGdjZmNncyJ9.BiYqpTga-cJZL5CymsZxGQ';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [] for Chicago

const testCoords = [-87.641, 41.895];
markers(testCoords, 'Activity');

module.exports = map;
