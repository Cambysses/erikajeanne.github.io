// Fades out before navigating away.
function navigateTo(url) {
    $("html").fadeOut(300, function () {
        window.location = url;
    });
}

$().ready(function (e) {

    // Load header and footer.
    $.get("header.html", function (data) {
        $("body").prepend(data);

        // Logo wink on hover.
        $("#logo").mouseenter(function () {
            $(this).attr("src", "content/images/logo_winky.webp");
        }).mouseleave(function () {
            $(this).attr("src", "content/images/logo.webp");
        });
    });
    $.get("footer.html", function (data) {
        $("body").append(data);
    });

    // Fade site in.
    $("html").fadeIn(300);

    // Expand image on click.
    $(".gallery-item").each(function () {
        $(this).click(function () {

            let img = $(this).children('img').eq(0);
            img.addClass("no-hover")

            $(".theater").children('img').eq(0).attr("src", img.attr("src"));
            $(".theater").fadeIn();

            $(".theater").click(function () {
                img.removeClass("no-hover")
                $(this).fadeOut();
            });
        });
    });

    // Hide expanded image.
    $(".theater").click(function () {
        $(this).fadeOut();
    });

});