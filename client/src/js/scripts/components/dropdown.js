
(function (window, document, $) {
  /************/
  // Dropdown //
  /************/

  const dropdownMenuIcon = $(".dropdown-icon-wrapper .dropdown-item");

  // For Dropdown With Icons
  dropdownMenuIcon.on("click", function () {
    $(".dropdown-icon-wrapper .dropdown-toggle i").remove();
    $(this).find("i").clone().appendTo(".dropdown-icon-wrapper .dropdown-toggle");
    $(".dropdown-icon-wrapper .dropdown-toggle .dropdown-item").removeClass("dropdown-item");
  });


})(window, document, jQuery);