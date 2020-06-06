$(document).ready(function() {
  const $root = $('#root');

  if (!$root) {
    return;
  }

  const $skillsContainer = $('.js-skills-container');
  const $circularProgressbarAnimation = $('.js-circular-progressbar-animation');
  const $circularProgressbarNumber = $('.js-circular-progressbar-number');
  let flat = false;

  function settingPercentageLoader() {
    $circularProgressbarAnimation.percentageLoader({
      valElement: 'p',
      strokeWidth: 15,
      bgColor: 'rgba(255, 255, 255, 0.30)',
      ringColor: '#f2f2f2',
    });
  }

  function settingCounterUp() {
    $circularProgressbarNumber.countUp({
      time: 1700
    });
  }

  function handleScrollActiveProgressbar() {
    const windowHeight = $(window).outerHeight(true);
    let windowPageYOffset = window.pageYOffset;
    let offsetTopElement = $skillsContainer.offset().top;

    let diffDistance = offsetTopElement - (windowPageYOffset + windowHeight * 0.8);

    if (diffDistance > 0 || flat) {
      return;
    }

    settingCounterUp();
    settingPercentageLoader();
    flat = true;
  }

  handleScrollActiveProgressbar();

  $(window).on('scroll', function() {
    handleScrollActiveProgressbar();
  });
});