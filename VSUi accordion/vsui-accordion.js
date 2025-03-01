(function ($) {
  $.fn.vsuiaccordion = function (options) {
    var settings = $.extend(
      {
        initHeaderClass: "vsui-accordion-header",
        initContentClass: "vsui-accordion-content",
        headerElement: "h3",
        contentElement: "div",
        opened: false,
      },
      options
    );

    return this.each(function () {
      var container = $(this);
      var header = container.children(settings.headerElement);
      var content = container.children(settings.contentElement);

      //initial classes
      header.addClass(settings.initHeaderClass);
      content.addClass(settings.initContentClass);
      //classes that the user adds
      header.addClass(settings.headerClasses);
      content.addClass(settings.contentClasses);

      content.hide(); //hide all contents

      if (settings.opened !== false) {
        content.eq(settings.opened).show();
        content.eq(settings.opened).addClass("open");
      }

      header.click(function () {
        $(this).toggleClass("active");
        $(this).next(settings.contentElement).toggleClass("open").slideToggle();
      });
    });
  };
})(jQuery);
