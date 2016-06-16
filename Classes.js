$(function() {

  var classButton = $('li.classButton');


  classButton.on('click', function() {
    classButton.removeClass('pink');
    $(this).addClass('pink');
  });

});
