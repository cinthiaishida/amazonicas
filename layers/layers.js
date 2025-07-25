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
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> Arawá<br />\
    <img src="styles/legend/_1_1.png" /> Aruák<br />\
    <img src="styles/legend/_1_2.png" /> Boran<br />\
    <img src="styles/legend/_1_3.png" /> Carib<br />\
    <img src="styles/legend/_1_4.png" /> Enlhet–Enenlhet<br />\
    <img src="styles/legend/_1_5.png" /> Isolada<br />\
    <img src="styles/legend/_1_6.png" /> Jodï-Sáliban<br />\
    <img src="styles/legend/_1_7.png" /> Karib<br />\
    <img src="styles/legend/_1_8.png" /> Kariri<br />\
    <img src="styles/legend/_1_9.png" /> Macro-Jê<br />\
    <img src="styles/legend/_1_10.png" /> Peba-Yaguan<br />\
    <img src="styles/legend/_1_11.png" /> Takanan<br />\
    <img src="styles/legend/_1_12.png" /> Tukano<br />\
    <img src="styles/legend/_1_13.png" /> Tupi<br />\
    <img src="styles/legend/_1_14.png" /> Tupi-Guaraní<br />\
    <img src="styles/legend/_1_15.png" /> Witotoan<br />\
    <img src="styles/legend/_1_16.png" /> Yanomami<br />\
    <img src="styles/legend/_1_17.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'Língua': 'Língua', 'Família': 'Família', 'Título': 'Título', 'Apresentador': 'Apresentador', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr__1.set('fieldImages', {'Língua': 'TextEdit', 'Família': 'TextEdit', 'Título': 'TextEdit', 'Apresentador': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr__1.set('fieldLabels', {'Língua': 'inline label - visible with data', 'Família': 'inline label - visible with data', 'Título': 'inline label - visible with data', 'Apresentador': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});