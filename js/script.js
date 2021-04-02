$(function () {
  var current_li;
  function setImg(src, id) {
    $('#main').attr('src', src);
    var path = 'text/' + id + '.txt';
    $.get(path, function (data) {
      console.log(data);
      $('#description p').html(data);
    });
  }
  $('#portfolio img').click(function () {
    var src = $(this).attr('src');
    var id = $(this).attr('id');
    current_li = $(this).parent();
    setImg(src, id);
    $('#frame').fadeIn();
    $('#overlay').fadeIn();
  });
  $('#overlay').click(function () {
    $(this).fadeOut();
    $('#frame').fadeOut();
  });
  $('#right').click(function () {
    if (current_li.is(':last-child')) {
      next_li = $('#portfolio li').first();
    } else {
      next_li = current_li.next();
    }
    next_src = next_li.children('img').attr('src');
    id = next_li.children('img').attr('id');

    setImg(next_src, id);

    current_li = next_li;
  });
  $('#left').click(function () {
    if (current_li.is(':first-child')) {
      prev_li = $('#portfolio li').last();
    } else {
      prev_li = current_li.prev();
    }
    prev_src = prev_li.children('img').attr('src');
    id = prev_li.children('img').attr('id');

    setImg(prev_src, id);

    current_li = prev_li;
  });
  $('#left, #right').mouseover(function () {
    $(this).css('opacity', '0.75');
  });
  $('#left, #right').mouseleave(function () {
    $(this).css('opacity', '0.5');
  });
});
