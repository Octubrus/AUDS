$(function() {

  var face = $("img.danceFace");
  var pose = $("img.dancePose");

  face.on("mouseover", function() {
    $(this).hide();
  });
  face.on("mouseleave", function() {
    $(this).show();
  });
});
