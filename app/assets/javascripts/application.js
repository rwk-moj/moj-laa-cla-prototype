/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// code for the additional contact services 'end of journey' pages
$('.js-hide').hide();
$('.js-toggle-btn').click(function(e) {
  e.preventDefault();
  $(this).hide();
  $('.js-hide').show();
});

// code for the upload multiple docs design
if(typeof MOJFrontend.MultiFileUpload !== 'undefined') {
  new MOJFrontend.MultiFileUpload({
  container: $('.moj-multi-file-upload'),
  uploadUrl: '/ajax-upload-url',
  deleteUrl: '/ajax-delete-url'
  });
}