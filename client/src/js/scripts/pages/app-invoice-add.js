
$(document).ready(function() {

  // ---------------------------
  // init date picker
  if ($(".pickadate").length) {
    $(".pickadate").pickadate({
      format: "mm/dd/yyyy"
    });
  }

  // --------------------------------
  // form repeater jquery
  if ($(".invoice-item-repeater").length) {
    $(".invoice-item-repeater").repeater({
      show: function() {
        $(this).slideDown();
      },
      hide: function(deleteElement) {
        $(this).slideUp(deleteElement);
      }
    });
  }
  // dropdown form's prevent parent action
  $(document).on("click", ".invoice-tax", function(e) {
    e.stopPropagation();
  });
  $(document).on("click", ".invoice-apply-btn", function() {
    var $this = $(this);
    var discount = $this
      .closest(".dropdown-menu")
      .find("#discount")
      .val();
    var tax1 = $this
      .closest(".dropdown-menu")
      .find("#Tax1 option:selected")
      .text();
    var tax2 = $this
      .closest(".dropdown-menu")
      .find("#Tax2 option:selected")
      .text();
    $this
      .parents()
      .eq(4)
      .find(".discount-value")
      .html(discount + "%");
    $this
      .parents()
      .eq(4)
      .find(".tax1")
      .html(tax1);
    $this
      .parents()
      .eq(4)
      .find(".tax2")
      .html(tax2);
  });
  // // on product change also change product description
  $(document).on("change", ".invoice-item-select", function(e) {
    var selectOption = this.options[e.target.selectedIndex].text;
    // switch case for product select change also change product description
    switch (selectOption) {
      case "Frest Admin Template":
        $(e.target)
          .closest(".invoice-item-filed")
          .find(".invoice-item-desc")
          .val("The most developer friendly & highly customisable HTML5 Admin");
        break;
      case "Stack Admin Template":
        $(e.target)
          .closest(".invoice-item-filed")
          .find(".invoice-item-desc")
          .val("Ultimate Bootstrap 4 Admin Template for Next Generation Applications.");
        break;
      case "Robust Admin Template":
        $(e.target)
          .closest(".invoice-item-filed")
          .find(".invoice-item-desc")
          .val(
            "Robust admin is super flexible, powerful, clean & modern responsive bootstrap admin template with unlimited possibilities"
          );
        break;
      case "Apex Admin Template":
        $(e.target)
          .closest(".invoice-item-filed")
          .find(".invoice-item-desc")
          .val("Developer friendly and highly customizable Angular 7+ jQuery Free Bootstrap 4 gradient ui admin template. ");
        break;
      case "Modern Admin Template":
        $(e.target)
          .closest(".invoice-item-filed")
          .find(".invoice-item-desc")
          .val("The most complete & feature packed bootstrap 4 admin template of 2019!");
        break;
    }
  });
});
