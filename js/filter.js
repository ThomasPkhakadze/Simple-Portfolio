$(function () {
  $('#filter li').click(function () {
    var category = $(this).html();
    $('#portfolio li').fadeOut();
    $('#filter li').removeClass('active');
    $(this).addClass('active');
    $('#portfolio li').each(function () {
      if ($(this).hasClass(category)) {
        $(this).fadeIn();
      }
    });
  });
});
