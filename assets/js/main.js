$(document).ready(function (argument) {
    var loader = "#loader",
        base = "assets/tpl/";
    // loader definition
    $.loader = function (loader, param) {
        $(loader).load(base + param + ".html");
        location.hash = '#' + param;
    }
    // load on init
    var hash = location.hash.slice(1);
    if (hash) {
        $.loader(loader, hash);
    } else {
        $.loader(loader, "overview");
    }
    $(".nav.nav-sidebar a").on("click", function () {
        $.loader(loader, $(this).data("target"));
    });
});

(function ($) {
        $.fn.delayKeyup = function(callback, ms){
            var timer = 0;
            $(this).keyup(function(){                   
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            });
            return $(this);
        };
})(jQuery);