$(document).ready(function() {
  const $root = $('#root');

  if (!$root) {
    return;
  }

  const ourProjectCard = '.js-our-project-card';
  const $ourProjectCards = $('.js-our-project-cards');
  const $ourProjectButtonLink = $('.js-our-project-button-link');

  const $loadPro = $ourProjectCards.isotope({
    // init Isotope
    itemSelector: ourProjectCard,
    layoutMode: 'masonry'
  });

  // layout Isotope after each image loads
  $loadPro.imagesLoaded().progress( function() {
    $loadPro.isotope('layout');
  });

  $ourProjectButtonLink.on('click', function(e) {
    e.preventDefault();

    const targetHref = $(this).attr('href');
    $loadPro.isotope({ filter: targetHref });
  });
});