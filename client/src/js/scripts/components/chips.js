
(function (window, document, $) {

  /*********/
  // Chips //
  /*********/
  // To close chips
  $('.chip-closeable').on('click', function () {
    $(this).closest('.chip').remove();
  })

})(window, document, jQuery);