// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(m){function f(){this.versions=[{version:"1.3",upgrader:function(b){return b}},{version:"1.4",upgrader:function(b){return b}},{version:"2.0Beta",upgrader:function(b){return b}},{version:"2.0",upgrader:function(b){return b}},{version:"2.0.1",upgrader:function(b){return b}},{version:"2.1",upgrader:function(b){b.countEnabled=!0;var f,l,d=b.mainPanelIcon.toString(),d=d.replace("\x3e\x3cimg",""),d=d.replace('src\x3d"','style\x3d"background-image:url('),
d=d.replace('" title\x3d"',');" title\x3d"');b.mainPanelIcon=d;if(d=b.layerInfos)for(var k=0;k<d.length;k++){var g,h,e=d[k];if(e.imageData){var a='\x3cdiv class\x3d"imageDataGFX"\x3e'+e.imageData+"\x3c/div\x3e",a=a.replace('width\x3d"18" height\x3d"18"','width\x3d"28" height\x3d"28"'),a=a.replace('width\x3d"18" height\x3d"18"','width\x3d"28" height\x3d"28"'),a=a.replace('x\x3d"-9" y\x3d"-9"','x\x3d"-14" y\x3d"-14"');g="matrix(1.00000000,0.00000000,0.00000000,1.00000000,9.00000000,9.00000000)";h="matrix(1.00000000,0.00000000,0.00000000,1.00000000,14.00000000,14.00000000)";
e.imageData=a.replace(g,h)}e.panelImageData&&(a=e.panelImageData,-1<a.indexOf("\x3cimg")?a=a.replace('class\x3d"','style\x3d"width:44px; height:44px;" class\x3d"'):(a=a.replace('width\x3d"35" height\x3d"35"','width\x3d"44" height\x3d"44"'),a=a.replace('width\x3d"35" height\x3d"35"','width\x3d"44" height\x3d"44"'),a=a.replace('x\x3d"-18" y\x3d"-18"','x\x3d"-22" y\x3d"-22"'),g="matrix(1.00000000,0.00000000,0.00000000,1.00000000,17.50000000,17.50000000)",h="matrix(1.00000000,0.00000000,0.00000000,1.00000000,22.00000000,22.00000000)",
a=a.replace(g,h)),e.panelImageData=a);a=e.symbolData;a.displayFeatureCount=!1;a._highLightColor="#ffffff";a.featureDisplayOptions={groupEnabled:!1,fields:[],groupField:{name:"",label:""}};"ThemeCluster"!==a.clusterType&&(f=a.clusterSymbol,l=a.clusterType);"ThemeCluster"===a.clusterType&&(f?(a.clusterType=l,a.clusterSymbol=f):a.clusterSymbol={color:[155,187,89,128],outline:{color:[115,140,61,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});if(a.s){var c=a.s;
-1<c.indexOf('width\x3d"26" height\x3d"26"')?(c=c.replace('width\x3d"26" height\x3d"26"','width\x3d"44" height\x3d"44"'),c=c.replace('width\x3d"26" height\x3d"26"','width\x3d"44" height\x3d"44"'),c=c.replace('x\x3d"-13" y\x3d"-13"','x\x3d"-22" y\x3d"-22"'),g="matrix(1.00000000,0.00000000,0.00000000,1.00000000,13.00000000,13.00000000)",h="matrix(1.00000000,0.00000000,0.00000000,1.00000000,22.00000000,22.00000000)",c=c.replace(g,h),c=c.replace(g,h)):c.indexOf("data:image">-1);a.panelHTML=c}e.symbolData=
a;d[k]=e}return b}}]}f.prototype=new m;return f.prototype.constructor=f});