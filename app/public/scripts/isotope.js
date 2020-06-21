$(document).ready(function() {
  $(function() {
    $loadPro = $('.content_pro_bot').isotope({
      // init Isotope
      itemSelector: '.content_pro_bot .nvt_standard_section',
      layoutMode: 'masonry'
    });
    // layout Isotope after each image loads
    $loadPro.imagesLoaded().progress( function() {
      $loadPro.isotope('layout');
    });
    $('.btn_fil_pro a').click(function() {
      var filter_cata = $(this).attr('href');
      //filter image
      $loadPro.isotope({ filter: filter_cata });
      return false;
    });
  });
});