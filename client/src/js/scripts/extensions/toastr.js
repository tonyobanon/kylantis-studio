/*=========================================================================================
	File Name: toastr.js
	Description: Toastr notifications
	----------------------------------------------------------------------------------------
	Item Name: Frest HTML Admin Template
	Version: 1.0
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {

  // Success Type
  $('#type-success').on('click', function () {
    toastr.success('Have fun storming the castle!', 'Miracle Max Says');
  });

  // Info Type
  $('#type-info').on('click', function () {
    toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
  });

  // Warning Type
  $('#type-warning').on('click', function () {
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
  });

  // Error Type
  $('#type-error').on('click', function () {
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
  });

  // Position Top Left
  $('#position-top-left').on('click', function () {
    toastr.options.positionClass = 'toast-top-left';
    toastr.info('I do not think that word means what you think it means.', 'Top Left!');
  });

  // Position Top Center
  $('#position-top-center').on('click', function () {
    toastr.options.positionClass ='toast-top-center';
    toastr.info('I do not think that word means what you think it means.', 'Top Center!');
  });

  // Position Top Right
  $('#position-top-right').on('click', function () {
    toastr.options.positionClass = 'toast-top-right';
    toastr.info('I do not think that word means what you think it means.', 'Top Right!');
  });

  // Position Top Full Width
  $('#position-top-full').on('click', function () {
    toastr.options.positionClass = 'toast-top-full-width';
    toastr.info('I do not think that word means what you think it means.', 'Top Full Width!');
  });

  // Position Bottom Left
  $('#position-bottom-left').on('click', function () {
    toastr.options.positionClass = 'toast-bottom-left';
    toastr.info('I do not think that word means what you think it means.', 'Bottom Left!');
  });

  // Position Bottom Center
  $('#position-bottom-center').on('click', function () {
    toastr.options.positionClass = 'toast-bottom-center';
    toastr.info('I do not think that word means what you think it means.', 'Bottom Center!');
  });

  // Position Bottom Right
  $('#position-bottom-right').on('click', function () {
    toastr.options.positionClass = 'toast-bottom-right';
    toastr.info('I do not think that word means what you think it means.', 'Bottom Right!');
  });

  // Position Bottom Full Width
  $('#position-bottom-full').on('click', function () {
    toastr.options.positionClass = 'toast-bottom-full-width';
    toastr.info('I do not think that word means what you think it means.', 'Bottom Full Width!');
  });

  // Text Notification
  $('#text-notification').on('click', function () {
    toastr.info('Have fun storming the castle!', 'Miracle Max Says');
  });

  // Close Button
  $('#close-button').on('click', function () {
    toastr.options.closeButton = true;
    toastr.success('Have fun storming the castle!', 'With Close Button');
  });

  // Progress Bar
  $('#progress-bar').on('click', function () {
    toastr.options.progressBar = true;
    toastr.warning('Have fun storming the castle!', 'Progress Bar');
  });

  // Clear Toast Button
  $('#clear-toast-btn').on('click', function () {
    toastr.error('Clear itself?<br /><br /><button type="button" class="btn btn-primary clear">Yes</button>', 'Clear Toast Button');
  });


  // Immediately remove current toasts without using animation
  $('#show-remove-toast').on('click', function () {
    toastr.info('Have fun storming the castle!', 'Miracle Max Says');
  });

  $('#remove-toast').on('click', function () {
    toastr.remove();
  });

  // Remove current toasts using animation
  $('#show-clear-toast').on('click', function () {
    toastr.info('Have fun storming the castle!', 'Miracle Max Says');
  });

  $('#clear-toast').on('click', function () {
    toastr.clear();
  });


  // Fast Duration
  $('#fast-duration').on('click', function () {
    toastr.options.showDuration = 500;
    toastr.success('Have fun storming the castle!', 'Fast Duration');
  });

  // Slow Duration
  $('#slow-duration').on('click', function () {
    toastr.options.hideDuration = 3000;
    toastr.warning('Have fun storming the castle!', 'Slow Duration');
  });

  // Timeout
  $('#timeout').on('click', function () {
    toastr.options.timeOut = 5000;
    toastr.error('I do not think that word means what you think it means.', 'Timeout!');
  });

  // Sticky
  $('#sticky').on('click', function () {
    toastr.options.timeOut = 0;
    toastr.info('I do not think that word means what you think it means.', 'Sticky!');
  });

  // Slide Down / Slide Up
  $('#slide-toast').on('click', function () {
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.timeOut = 2000;
    toastr.success('I do not think that word means what you think it means.', 'Slide Down / Slide Up!');
  });

  // Fade In / Fade Out
  $('#fade-toast').on('click', function () {
    toastr.options.showMethod = 'fadeIn';
    toastr.options.hideMethod = 'fadeOut';
    toastr.options.timeOut = 2000;
    toastr.success('I do not think that word means what you think it means.', 'Slide Down / Slide Up!');
  });
});
