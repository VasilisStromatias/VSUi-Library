(function ($) {
  $.fn.vsuiaccordion = function (options) {
    var settings = $.extend(
      {
        initHeaderClass: "vsui-accordion-header",
        initContentClass: "vsui-accordion-content",
        headerElement: "h3",
        contentElement: "div",
      },
      options
    );

    return this.each(function () {
      var container = $(this);
      var header = container.children(settings.headerElement);
      var content = container.children(settings.contentElement);

      header.addClass(settings.headerClasses);
      content.addClass(settings.contentClasses);
      header.addClass(settings.initHeaderClass);
      content.addClass(settings.initContentClass);

      header.click(function () {
        $(this).next(settings.contentElement).toggleClass("open");
      });
    });
  };
})(jQuery);
