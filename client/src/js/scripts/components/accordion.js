
(function (window, document, $) {


  /***********************/
  // Accordion //
  /***********************/
  var accordion = $(".accordion"),
    defaultaccordion = $(".accordion .card-header"),
    collapseTitle = $(".collapsible .card-header"),
    collapseHoverTitle = $(".card-hover .card-header"),
    dropdownMenuIcon = $(".dropdown-icon-wrapper .dropdown-item");

  // To open Collapse on hover
  if (accordion.attr("data-toggle-hover", "true")) {
    collapseHoverTitle.closest(".card").on("mouseenter", function () {
      var $this = $(this);
      $this.children(".collapse").collapse("show");
      $this.closest(".card").addClass("open");
    });
    collapseHoverTitle.closest(".card").on("mouseleave", function () {
      var $this = $(this);
      $this.children(".collapse").collapse("hide");
      $this.closest(".card").removeClass("open");
    });
  }
  // When Collapse open on click
  collapseTitle.on("click", function () {
    var $this = $(this);
    $this.next(".collapse").on('show.bs.collapse', function () {
      $this.parent().addClass("open")
    })
    $this.next(".collapse.show").on('hide.bs.collapse', function () {
      $this.parent().removeClass("open")
    })
  });
  // When accordion open on click
  defaultaccordion.on("click", function () {
    var $this = $(this);
    if ($this.parent().next(".show")) {
      $this.closest(".card").toggleClass("open");
      $this.closest(".card").siblings(".open").removeClass("open");
    }
  });

})(window, document, jQuery);