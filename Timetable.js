
$(function() {

  var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date()).getDay()];
  $('div#' + day).addClass('in');

});
