var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_Trees_3 = new ol.format.GeoJSON();
var features_Trees_3 = format_Trees_3.readFeatures(json_Trees_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_3.addFeatures(features_Trees_3);
var lyr_Trees_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_3, 
                style: style_Trees_3,
                interactive: true,
                title: '<img src="styles/legend/Trees_3.png" /> Trees'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Trees_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Buildings_1,lyr_Roads_2,lyr_Trees_3];
lyr_Buildings_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Roads_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Trees_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buildings_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Trees_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Buildings_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Roads_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Trees_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Trees_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});