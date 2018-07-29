mapboxgl.accessToken = 'pk.eyJ1IjoiZ2hjYXJ0ZXJyYXkiLCJhIjoiY2pqejZic2JiMDBnODN3bWY0MWU2d3gzYyJ9.LtzWIZJExsvbz7J8i_ridQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-77.36, 38.80],
    zoom: 7.7
});

var nav = new mapboxgl.NavigationControl({
    showCompas: true
})

map.addControl(nav, 'top-right')

map.on('zoom', function(){
    console.log(map.getCenter())
})

map.on('move', function(){
    console.log(map.getCenter())
})

map.on('load', function(){
    map.addSource('stations', {
        type: 'geojson',
        data: 'https://opendata.arcgis.com/datasets/dfb1e5eade3743b0b697e77f57116d6e_2.geojson'
    })
    map.addLayer({
        'id'    : 'ev-layer',
        'type'  : 'symbol',
        'source': 'stations',
        'layout': {
            'icon-image': 'rocket-15'
        }
    })
});