!function(o){"use strict";o(document).ready(function(){function t(){o(window).width()>992?o(".navbar .dropdown").on("mouseover",function(){o(".dropdown-toggle",this).trigger("click")}).on("mouseout",function(){o(".dropdown-toggle",this).trigger("click").blur()}):o(".navbar .dropdown").off("mouseover").off("mouseout")}t(),o(window).resize(t)}),o(window).scroll(function(){o(this).scrollTop()>100?o(".back-to-top").fadeIn("slow"):o(".back-to-top").fadeOut("slow")}),o(".back-to-top").click(function(){return o("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1});var e=o(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});o("#portfolio-flters li").on("click",function(){o("#portfolio-flters li").removeClass("active"),o(this).addClass("active"),e.isotope({filter:o(this).data("filter")})}),o(".post-carousel").owlCarousel({autoplay:!0,smartSpeed:1500,dots:!1,loop:!0,nav:!0,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},576:{items:1},768:{items:2},992:{items:2}}}),o(".testimonial-carousel").owlCarousel({center:!0,autoplay:!0,smartSpeed:2e3,dots:!0,loop:!0,responsive:{0:{items:1},576:{items:1},768:{items:2},992:{items:3}}})}(jQuery);