function initMap() {
  var customMapType = new google.maps.StyledMapType([{"featureType":"all","elementType":"all","stylers":[{"saturation":"0"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#efc337"},{"lightness":"-15"},{"gamma":"1.00"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"lightness":"20"},{"visibility":"simplified"},{"gamma":".5"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"60"},{"saturation":"0"},{"color":"#efc337"},{"visibility":"simplified"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efc337"},{"saturation":"0"},{"lightness":"12"},{"gamma":"1.00"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"-7"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"all","stylers":[{"gamma":"6.14"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"-18"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"saturation":"0"},{"lightness":"100"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"invert_lightness":true}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#ffc200"},{"saturation":"100"},{"gamma":"0.85"},{"lightness":"17"},{"weight":"1.00"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"hue":"#ffc200"},{"saturation":"-100"},{"gamma":"0.5"},{"weight":"1.00"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":"80"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"35"},{"gamma":"1.00"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]
   ,{
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('mapAberdeen'), {
    zoom: 15,
    center: {lat: 57.166130, lng: -2.098298},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}



/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapAberdeen'), {
  center: {lat: 57.166130, lng: -2.098298},
  zoom: 15
  });
  var stylesArray = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#666666"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

}


/*
https://developers.google.com/maps/documentation/javascript/tutorial#The_Hello_World_of_Google_Maps_v3
https://snazzymaps.com/style/44798/beaglecat-yellow
https://snazzymaps.com/style/6570/dark-yellow-map-for-synwars
https://snazzymaps.com/style/28473/golden
https://snazzymaps.com/style/30952/modern-style
*/
