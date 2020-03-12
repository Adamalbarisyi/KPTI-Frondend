mydiv = document.getElementById("showmehideme");

function showhide(d) {
    d.style.display = (d.style.display !== "none") ? "none" : "block";
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



// Section Slider Artikel
$(document).ready(function() {


    var clickEvent = false;
    $('#myCarousel').carousel({
        interval: 4000
    }).on('click', '.list-group li', function() {
        clickEvent = true;
        $('.list-group li').removeClass('active');
        $(this).addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if (!clickEvent) {
            var count = $('.list-group').children().length - 1;
            var current = $('.list-group li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.list-group li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});



$(window).ready(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight / itemlength + 1);
    $('#myCarousel .list-group-item').outerHeight(triggerheight);
});


$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        items: 5,
        slideSpeed: 1000,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navigation: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 5,
                nav: false
            },
            1200: {
                items: 5,
                nav: false,
                loop: false
            }
        }

    });

    $("#owl-demo1").owlCarousel({
        items: 4,
        slideSpeed: 1000,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navigation: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            768: {
                items: 2,
                nav: false,
                dots: false,
            },
            992: {
                items: 3,
                nav: false,
                dots: false
            },
            1200: {
                dots: false,
                items: 4,
                nav: false,
                loop: false
            }
        }

    });

    $("#owl-demo2").owlCarousel({
        items: 4,
        slideSpeed: 1000,
        loop: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navigation: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            768: {
                items: 2,
                nav: false,
                dots: false,
            },
            992: {
                items: 3,
                nav: false,
                dots: false
            },
            1200: {
                dots: false,
                items: 4,
                nav: false,
                loop: false
            }
        }

    });


});


// Top Search
$("#ss").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("current");
    $(".search-form").toggleClass("visible");
});


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
    } else {
        $(".back-to-top").fadeOut("slow");
    }
});
$(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
});

$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});

$(document).ready(function() {
    $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 3).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });

});

$(document).ready(function() {
    $(".moreBox1").slice(0, 3).show();
    if ($(".blogBox1:hidden").length != 0) {
        $("#loadMore1").show();
    }
    $("#loadMore1").on('click', function(e) {
        e.preventDefault();
        $(".moreBox1:hidden").slice(0, 3).slideDown();
        if ($(".moreBox1:hidden").length == 0) {
            $("#loadMore1").fadeOut('slow');
        }
    });
});

$(document).ready(function() {
    $(".moreBox2").slice(0, 1).show();
    if ($(".blogBox2:hidden").length != 0) {
        $("#loadMore2").show();
    }
    $("#loadMore2").on('click', function(e) {
        e.preventDefault();
        $(".moreBox2:hidden").slice(0, 1).slideDown();
        if ($(".moreBox2:hidden").length == 0) {
            $("#loadMore2").fadeOut('slow');
        }
    });
});



$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".single-item").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".single-item1").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".single-item2").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".single-item3").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".regular").slick({
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 300,
                    infinite: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});