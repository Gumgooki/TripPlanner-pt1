const mapboxgl = require('mapbox-gl');
const map = require('./index.js');

module.exports = function markerFactory(coords, type) {
  let image = '';
  if (type === 'Restaurant') {
    image = 'http://i.imgur.com/cqR6pUI.png';
  } else if (type === 'Hotel') {
    image = 'http://i.imgur.com/D9574Cu.png';
  } else if (type === 'Activity') {
    image = 'http://i.imgur.com/WbMOfMl.png';
  }
  const touristMarker = document.createElement('div');
  touristMarker.style.width = '32px';
  touristMarker.style.height = '39px';
  touristMarker.style.backgroundImage = `url(${image})`;

  new mapboxgl.Marker(touristMarker).setLngLat(coords).addTo(map); // [] for Chicago
};
