$( document ).ready(function() {
  var classButtons = $('li.classButton');
  var button1 = $('li#Button1');
  var button2 = $('li#Button2');

  var classContainer = $('div.classContainer');
  var picture1 = $('div#1Class');
  var picture2 = $('div#2Class');


  $('ul#classList').on('click', 'li', function() {
    $('li.classButton').removeClass('pink');
    var $this = $(this);
    $this.addClass('pink');

    $('div.classContainer').css("marginLeft", "1000px");
    var classNumber = $this.index();
    $('div.classContainer:eq(classNumber)').css("marginLeft", "100px");


    /*classContainer.css("opacity", "0.0");
    picture1.css("opacity", "1.0");*/
  });
  button2.on('click', function() {
    classButtons.removeClass('pink');
    button2.addClass('pink');

  /*  classContainer.css("opacity", "0.0");
    picture2.css("opacity", "1.0");*/
  });

});
