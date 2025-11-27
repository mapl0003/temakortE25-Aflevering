var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_mapl003_temakortFolkeskoler_2 = new ol.format.GeoJSON();
var features_mapl003_temakortFolkeskoler_2 = format_mapl003_temakortFolkeskoler_2.readFeatures(json_mapl003_temakortFolkeskoler_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapl003_temakortFolkeskoler_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapl003_temakortFolkeskoler_2.addFeatures(features_mapl003_temakortFolkeskoler_2);
var lyr_mapl003_temakortFolkeskoler_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapl003_temakortFolkeskoler_2, 
                style: style_mapl003_temakortFolkeskoler_2,
                popuplayertitle: 'mapl003_temakort — Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/mapl003_temakortFolkeskoler_2.png" /> mapl003_temakort — Folkeskoler'
            });
var format_mapl003_temakortTogstation_3 = new ol.format.GeoJSON();
var features_mapl003_temakortTogstation_3 = format_mapl003_temakortTogstation_3.readFeatures(json_mapl003_temakortTogstation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapl003_temakortTogstation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapl003_temakortTogstation_3.addFeatures(features_mapl003_temakortTogstation_3);
var lyr_mapl003_temakortTogstation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapl003_temakortTogstation_3, 
                style: style_mapl003_temakortTogstation_3,
                popuplayertitle: 'mapl003_temakort — Togstation',
                interactive: true,
                title: '<img src="styles/legend/mapl003_temakortTogstation_3.png" /> mapl003_temakort — Togstation'
            });
var format_Lokalplan_4 = new ol.format.GeoJSON();
var features_Lokalplan_4 = format_Lokalplan_4.readFeatures(json_Lokalplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplan_4.addFeatures(features_Lokalplan_4);
var lyr_Lokalplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplan_4, 
                style: style_Lokalplan_4,
                popuplayertitle: 'Lokalplan',
                interactive: true,
    title: 'Lokalplan<br />\
    <img src="styles/legend/Lokalplan_4_0.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplan_4_1.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplan_4_2.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplan_4_3.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplan_4_4.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplan_4_5.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplan_4_6.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplan_4_7.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplan_4_8.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplan_4_9.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplan_4_10.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplan_4_11.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplan_4_12.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplan_4_13.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplan_4_14.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplan_4_15.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplan_4_16.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplan_4_17.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplan_4_18.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplan_4_19.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplan_4_20.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplan_4_21.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplan_4_22.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplan_4_23.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplan_4_24.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplan_4_25.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplan_4_26.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplan_4_27.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplan_4_28.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplan_4_29.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplan_4_30.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplan_4_31.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplan_4_32.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplan_4_33.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplan_4_34.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplan_4_35.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplan_4_36.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplan_4_37.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplan_4_38.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplan_4_39.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplan_4_40.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplan_4_41.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplan_4_42.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplan_4_43.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplan_4_44.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplan_4_45.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplan_4_46.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplan_4_47.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplan_4_48.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplan_4_49.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplan_4_50.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplan_4_51.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplan_4_52.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplan_4_53.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplan_4_54.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplan_4_55.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplan_4_56.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplan_4_57.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplan_4_58.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplan_4_59.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplan_4_60.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplan_4_61.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplan_4_62.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplan_4_63.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplan_4_64.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplan_4_65.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplan_4_66.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplan_4_67.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplan_4_68.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplan_4_69.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplan_4_70.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplan_4_71.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplan_4_72.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplan_4_73.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplan_4_74.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplan_4_75.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplan_4_76.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplan_4_77.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplan_4_78.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplan_4_79.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplan_4_80.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplan_4_81.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplan_4_82.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplan_4_83.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplan_4_84.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplan_4_85.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplan_4_86.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplan_4_87.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplan_4_88.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplan_4_89.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplan_4_90.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplan_4_91.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplan_4_92.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplan_4_93.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplan_4_94.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplan_4_95.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplan_4_96.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplan_4_97.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplan_4_98.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplan_4_99.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplan_4_100.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplan_4_101.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplan_4_102.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplan_4_103.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplan_4_104.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplan_4_105.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplan_4_106.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplan_4_107.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplan_4_108.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplan_4_109.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplan_4_110.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplan_4_111.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplan_4_112.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplan_4_113.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplan_4_114.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplan_4_115.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplan_4_116.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplan_4_117.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplan_4_118.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplan_4_119.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplan_4_120.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplan_4_121.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplan_4_122.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplan_4_123.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplan_4_124.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplan_4_125.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplan_4_126.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplan_4_127.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplan_4_128.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplan_4_129.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplan_4_130.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplan_4_131.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplan_4_132.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplan_4_133.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplan_4_134.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplan_4_135.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplan_4_136.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplan_4_137.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplan_4_138.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplan_4_139.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplan_4_140.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplan_4_141.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplan_4_142.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplan_4_143.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplan_4_144.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplan_4_145.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplan_4_146.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplan_4_147.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplan_4_148.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplan_4_149.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplan_4_150.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplan_4_151.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplan_4_152.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplan_4_153.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplan_4_154.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplan_4_155.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplan_4_156.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplan_4_157.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplan_4_158.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplan_4_159.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplan_4_160.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplan_4_161.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplan_4_162.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplan_4_163.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplan_4_164.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplan_4_165.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplan_4_166.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplan_4_167.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplan_4_168.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplan_4_169.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplan_4_170.png" /> 11367622<br />\
    <img src="styles/legend/Lokalplan_4_171.png" /> 11442254<br />\
    <img src="styles/legend/Lokalplan_4_172.png" /> <br />' });
var format_FrededeomrderHvidovrekommune_5 = new ol.format.GeoJSON();
var features_FrededeomrderHvidovrekommune_5 = format_FrededeomrderHvidovrekommune_5.readFeatures(json_FrededeomrderHvidovrekommune_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeomrderHvidovrekommune_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeomrderHvidovrekommune_5.addFeatures(features_FrededeomrderHvidovrekommune_5);
var lyr_FrededeomrderHvidovrekommune_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeomrderHvidovrekommune_5, 
                style: style_FrededeomrderHvidovrekommune_5,
                popuplayertitle: 'Frededeområder Hvidovre kommune',
                interactive: true,
                title: '<img src="styles/legend/FrededeomrderHvidovrekommune_5.png" /> Frededeområder Hvidovre kommune'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_mapl003_temakortFolkeskoler_2.setVisible(true);lyr_mapl003_temakortTogstation_3.setVisible(true);lyr_Lokalplan_4.setVisible(true);lyr_FrededeomrderHvidovrekommune_5.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_kommuneplan_1,lyr_mapl003_temakortFolkeskoler_2,lyr_mapl003_temakortTogstation_3,lyr_Lokalplan_4,lyr_FrededeomrderHvidovrekommune_5];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_mapl003_temakortFolkeskoler_2.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_mapl003_temakortTogstation_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lokalplan_4.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_FrededeomrderHvidovrekommune_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_mapl003_temakortFolkeskoler_2.set('fieldImages', {'fid': 'TextEdit', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_mapl003_temakortTogstation_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lokalplan_4.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_FrededeomrderHvidovrekommune_5.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_1.set('fieldLabels', {'plannavn': 'no label', 'doklink': 'inline label - always visible', 'datooprt': 'no label', 'datoopdt': 'no label', });
lyr_mapl003_temakortFolkeskoler_2.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_mapl003_temakortTogstation_3.set('fieldLabels', {'fid': 'header label - visible with data', 'id': 'header label - always visible', 'Name': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lokalplan_4.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_FrededeomrderHvidovrekommune_5.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_FrededeomrderHvidovrekommune_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});