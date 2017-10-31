
var images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

$(function () {
    var i = 0;
    $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i === images.length) {
            i = 0;
        }
        $("#dvImage").fadeOut(0, function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn(0);
        });
    }, 3000);
});


   