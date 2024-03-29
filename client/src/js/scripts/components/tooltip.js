
(function (window, document, $) {


  /***********/
  // Tooltip //
  /***********/
  // Add Custom Class For Light Tooltip

  if (typeof $.fn.tooltip.Constructor === 'undefined') {
    throw new Error('Bootstrap Tooltip must be included first!');
  }

  var Tooltip = $.fn.tooltip.Constructor;

  // add customClass option to Bootstrap Tooltip
  $.extend(Tooltip.Default, {
    customClass: ''
  });

  var _show = Tooltip.prototype.show;

  Tooltip.prototype.show = function () {

    // invoke parent method
    _show.apply(this, Array.prototype.slice.apply(arguments));

    if (this.config.customClass) {
      var tip = this.getTipElement();
      $(tip).addClass(this.config.customClass);
    }

  };

})(window, document, jQuery);