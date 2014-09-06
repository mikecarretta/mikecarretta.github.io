(function(){
  // code
  $('.filters a').click(function() {
    $('.filters .active').removeClass('active');
    $(this).parent().addClass('active');

    var filterVal = $(this).text().toLowerCase().replace(/ /g,'-');

    if(filterVal == 'all') {
      $('.items div').fadeIn('slow').removeClass('hidden');
    } else {

      $('.items div').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }

    return false;

  });
}());