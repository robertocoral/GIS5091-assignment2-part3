var map = L.map('map').setView([37.76423006921716, -122.42960396594103], 11);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON('https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson', function(data) {
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});


// make it so the heatmap becomes points at a certain zoom scale
// hint: https://gis.stackexchange.com/questions/258515/show-hide-markers-depending-on-zoom-level
