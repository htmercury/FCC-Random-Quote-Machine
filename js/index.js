$(document).ready(function () {
    $(".getMessage").on("click", function () {
        $.getJSON("https://okrammus.glitch.me/random", function (json) {
            $(".quote-sign, .message, .name").animate({
                opacity: 0
            }, 500,
                function () {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $(".name").html("- " + json.name);
                    $(".champion-img").attr("src", json.image);
                    $(".message").html(json.quotes[Math.floor(Math.random() * json.quotes.length)]);
                });
        });
        // Change Color
    });
    $(".tweet-this").on("click", function () {
        let quote = $(".message").text();
        let author = $(".name").text();
    });
    $(".tumblr-this").on("click", function () {
        let quote = $(".message").text();
        let author = $(".name").text().substring(2);
        window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=LoLquotes&caption=' + author + '&content=' + quote + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    });
});