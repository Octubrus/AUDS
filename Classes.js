$( document ).ready(function() {
  var classButtons = $('li.classButton');
  var classContainer = $('div.classContainer');
  var classList = $('ul#classList');

  classContainer.hide();

  function displayRandomClass() {
    var randomNumber = Math.floor(Math.random() * 20);
    $('div.classContainer:eq('+randomNumber+')').show();
    $('li.classButton:eq('+randomNumber+')').addClass('clicked');
  }

  displayRandomClass();

  classList.on('click', 'li', function() {
    classButtons.removeClass('clicked');
    var $this = $(this);
    $this.addClass('clicked');

    classContainer.hide();
    var classNumber = $this.index();
    $('div.classContainer:eq('+classNumber+')').show();

  });

});
