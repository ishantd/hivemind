$("#hide-nav-item").hide()


/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

$('.tabs').click(function() {
    $(".tabs").removeClass("selected");
    $(this).addClass('selected');
})

$(".tabs").click(function()
    {
        var selected = $(this).find("a").attr("data-target")
        $(".tab-pane").removeClass('active');
        $(selected).addClass('active');
    });
    $("#subscribe-form").hide();
$("#subscribe-button").click(function(){
    $(this).hide();
    $("#subscribe-form").show();
    $("#subscribe-form").addClass("animated pulse")
})

$("#sub-success").hide()

$("#sub-submit").click(function(){
    $("#sub-form").hide();
    $("#sub-success").show();
    $("#sub-success").addClass("animated flash")
})