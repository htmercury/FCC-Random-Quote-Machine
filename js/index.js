$(document).ready(function() {
  $("#getMessage").on("click", function() {
    $.getJSON("https://okrammus.glitch.me/random", function(json) {
      $(".quote-sign, .message, .name").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
        $(".champion-img").attr("src",json.image);
        $(".name").html("- " + json.name); $(".message").html(json.quotes[Math.floor(Math.random() * json.quotes.length)]);
        });
        });
      
      
    // Only change code above this line.
  });
});