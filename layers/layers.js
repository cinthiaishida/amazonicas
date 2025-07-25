var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> '
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'Língua': 'Língua', 'Família': 'Família', 'Título': 'Título', 'Apresentador': 'Apresentador', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr__1.set('fieldImages', {'Língua': 'TextEdit', 'Família': 'TextEdit', 'Título': 'TextEdit', 'Apresentador': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr__1.set('fieldLabels', {'Língua': 'inline label - visible with data', 'Família': 'inline label - visible with data', 'Título': 'inline label - visible with data', 'Apresentador': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});