$( document ).ready(function() {
  var classButtons = $('li.classButton');
  var classContainer = $('div.classContainer');
  var classList = $('ul#classList');
  var sideMenu = $('div.sideMenu');
  var sideContent = $('div.sideContent');
  var overlay = $('div#overlay');
  var exitButton = $('div.exitButton');

  exitButton.hide();

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

  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

  if (isMobile.matches) {
    classButtons.addClass('menuMobile');
    classList.on('click', 'li', function() {
      classButtons.removeClass('clicked');
      var $this = $(this);
      $this.addClass('clicked');

      sideMenu.removeClass('col-xs-12').addClass('hidden-xs');
      sideContent.removeClass('hidden-xs').addClass('col-xs-12');

      classContainer.hide();
      var classNumber = $this.index();
      var clickedClass = $('div.classContainer:eq('+classNumber+')');

      clickedClass.show().addClass('backgroundPositionMobile');

      clickedClass.children().addClass('classContentMobile');
      overlay.addClass('backgroundOpacity');
      exitButton.show();
    });

    exitButton.on('click', function() {

      sideMenu.removeClass('hidden-xs').addClass('col-xs-12');
      sideContent.removeClass('col-xs-12').addClass('hidden-xs')

      classContainer.hide().removeClass('backgroundPositionMobile');

      classContainer.children().removeClass('classContentMobile');
      overlay.removeClass('backgroundOpacity');
      exitButton.hide();

    });
  }
});
