$('button:not(.remove)').on('click', function() {
  $('.bordered-box').css('border-image-repeat', $(this).text());
});

$('.remove').on('click', function() {
  $('.bordered-box').css('border-image-repeat', '');
});