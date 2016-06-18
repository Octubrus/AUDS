$( document ).ready(function() {
  var classButtons = $('li.classButton');
  var classContainer = $('div.classContainer');
  var classList = $('ul#classList');

  classList.on('click', 'li', function() {
    classButtons.removeClass('clicked');
    var $this = $(this);
    $this.addClass('clicked');

    classContainer.hide();
    var classNumber = $this.index();
    $('div.classContainer:eq('+classNumber+')').show();

  });

});
