const { Marker } = require('mapbox-gl');

const iconURLs = {
  hotels: 'https://i.imgur.com/D9574Cu.png',
  restaurants: 'https://i.imgur.com/cqR6pUI.png',
  activities: 'https://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  const markerElement = document.createElement('div');
  markerElement.style.width = '32px';
  markerElement.style.height = '37px';
  markerElement.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerElement).setLngLat(coords);
};

module.exports = buildMarker;

// const mapboxgl = require('mapbox-gl');

// module.exports = function markerFactory(coords, type) {
//   let image = '';
//   if (type === 'restaurants') {
//     image = 'https://i.imgur.com/cqR6pUI.png';
//   } else if (type === 'hotels') {
//     image = 'https://i.imgur.com/D9574Cu.png';
//   } else if (type === 'activities') {
//     image = 'https://i.imgur.com/WbMOfMl.png';
//   }
//   const touristMarker = document.createElement('div');
//   touristMarker.style.width = '32px';
//   touristMarker.style.height = '39px';
//   touristMarker.style.backgroundImage = `url(${image})`;

//   return new mapboxgl.Marker(touristMarker).setLngLat(coords); // [] for Chicago
// };
