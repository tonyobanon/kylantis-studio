
(function (window, document, $) {
 /***************/
  // widget chat //
  /**************/
  // Widget - chat area perfect scrollbar initialization
  if ($(".widget-chat-demo-scroll").length > 0) {
    var chat_scroll_owner_user = new PerfectScrollbar(".widget-chat-demo-scroll", { wheelPropagation: false });
  }
  // widget chat hide/show on demo chat button click
  $(".chat-demo-button").click(function () {
    $(".widget-chat-demo").toggleClass("d-block d-none");
  });
  // widget chat hide on close button click
  $(".widget-chat-close").click(function () {
    $(".widget-chat-demo").toggleClass("d-block d-none");
  });
  // widget chat autoscroll to bottom of Chat area on click on demo chat button
  $(".chat-demo-button").on("click", function () {
    $(".widget-chat-demo-scroll").animate({ scrollTop: $(".widget-chat-demo-scroll")[0].scrollHeight }, 800)
  });

})(window, document, jQuery);

// widget chat function to add message to chat demo
function widgetChatMessageDemo(source) {
    var message = $(".chat-message-demo").val();
    if (message != "") {
      var html = '<div class="chat-message">' + "<p>" + message + "</p>" + "<div class=" + "chat-time" + ">5:01 PM</div></div>";
      $(".widget-chat-demo .chat:last-child .chat-body").append(html);
      $(".chat-message-demo").val("");
      $(".widget-chat-demo-scroll").scrollTop($(".widget-chat-demo-scroll > .chat-content").height());
    }
  }