$(document).ready(function() {
  const $root = $('#root');
  if (!$root) {
    return;
  }

  const $skillsContainer = $('.js-skills-container');
  const $circularProgressbar = $('.js-circular-progressbar');
  let flat = false;

  $circularProgressbar.asPieProgress({
    namespace: 'asPieProgress'
  });

  function handleScrollActiveProgressbar() {
    const windowHeight = $(window).outerHeight(true);
    let windowPageYOffset = window.pageYOffset;
    let offsetTopElement = $skillsContainer.offset().top;

    let diffDistance = offsetTopElement - (windowPageYOffset + windowHeight * 0.8);

    if (diffDistance > 0) {
      return;
    }

    $circularProgressbar.asPieProgress('start');
  }

  handleScrollActiveProgressbar();

  $(window).on('scroll', function() {
    if(flat === false) {
      handleScrollActiveProgressbar();
      flat = true;
    }
  });
});