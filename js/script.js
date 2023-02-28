$(document).ready(function () {
    //// mobile navigation
    $(".toggle.open").click(function () {
        $(".overlay").animate({ opacity: 1 }).css("visibility", "visible", "zIndex", "1");
        $(".nav--primary").css({ "transform": "translate(-300px, 0)" });
    });

    $(".overlay").click(function () {
        $(this).animate({ opacity: 0 }).css("visibility", "hidden", "zIndex", "0");
        $(".nav--primary").css({ "transform": "translate(0, 0)" });
    });

    $(".nav--primary a, .nav--primary button").click(function () {
        $(".overlay").animate({ opacity: 0 }).css("visibility", "hidden", "zIndex", "0");
        $("nav").css({ "transform": "translate(0, 0)" });
    });
});