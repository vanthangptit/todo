$(document).ready(function() {

  $('.pie-progress').asPieProgress({
    namespace: 'pie_progress'
  });
  $('#button_start').on('click', function() {
    $('.pie_progress').asPieProgress('start');
  });
  $('#button_finish').on('click', function() {
    $('.pie_progress').asPieProgress('finish');
  });
  $('#button_go').on('click', function() {
    $('.pie_progress').asPieProgress('go', 50);
  });
  $('#button_go_percentage').on('click', function() {
    $('.pie_progress').asPieProgress('go', '50%');
  });
  $('#button_stop').on('click', function() {
    $('.pie_progress').asPieProgress('stop');
  });
  $('#button_reset').on('click', function() {
    $('.pie_progress').asPieProgress('reset');
  });
});