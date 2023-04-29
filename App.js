$(function () {
  $(".menuitem").onclick(function () {
    $(".menuitem").removeClass("active");
    $(this).addClass("active");
  });
});
