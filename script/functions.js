jQuery(document).ready(function($) {

	'use strict';
    //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("ec-sticky");
	      }
	      else{
	          jQuery('body').removeClass("ec-sticky");
	      }
	  });

	//***************************
    // Silk Slider Functions
    //***************************
	  jQuery('.ec-counter-slider,.ec-list-slide,.ec-blog-carousel').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-direction196'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-direction196'></i></span>",
    	  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

	  jQuery('.ec-partner-slide').slick({
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-direction196'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-direction196'></i></span>",
    	  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

	  jQuery('.ec-sponsors-slider').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='fa fa-chevron-left'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='fa fa-chevron-left'></i></span>",
    	  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

	  jQuery('.ec-team-slider,.ec-priceplan-slider,.ec-event-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='fa fa-chevron-left'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='fa fa-chevron-left'></i></span>",
    	  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

	  jQuery('.ec-shop-slider').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='fa fa-arrow-circle-o-left'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='fa fa-arrow-circle-o-left'></i></span>",
    	  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

	//*******************************
    // Testimonial Slider Function
    //*******************************
	   jQuery('.ec-slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: false,
		  asNavFor: '.ec-slider-nav'
		});
		jQuery('.ec-slider-nav').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: '.ec-slider-for',
		  dots: false,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-direction196'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-direction196'></i></span>",
		  centerMode: true,
		  focusOnSelect: true,
		  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    }
			  ],
		});
	//*******************************
    // Painting Slider Function
    //*******************************
	   jQuery('.ec-painting-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.ec-painting-nav'
		});
		jQuery('.ec-painting-nav').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.ec-painting-for',
		  dots: false,
		  vertical: true,
		  arrows: false,
		  centerMode: true,
		  focusOnSelect: true,
		  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite: true,
			        vertical: false,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        vertical: false,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        vertical: false,
			      }
			    }
			  ],
		});

	//***************************
    // Global Toggle Function
    //***************************
     jQuery('div.ec-country-link').each(function() {
	    var $dropdown = $(this);

	    jQuery("a.ec-country-btn", $dropdown).on("click", function(e) {
	      e.preventDefault();
	      jQuery("div.ec-city-link", $dropdown).toggle();
	      return false;
	    });

	});
	  jQuery('.city-close-btn').on("click", function(){
	    jQuery("div.ec-city-link").hide();
	  });

    //********************************
    // Mediaelementplayer Function
    //********************************
    jQuery('video').mediaelementplayer({
		success: function(player, node) {
			jQuery('#' + node.id + '-mode').html('mode: ' + player.pluginType);
		}
	});

    //***************************
    // Click to Top Button
    //***************************
    jQuery('.backtop-btn').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //***************************
    // Countdown Function
    //***************************
    jQuery(function() {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        jQuery('#ec-Countdown').countdown({
            until: austDay
        });
        jQuery('#year').text(austDay.getFullYear());
    });

    //***************************
    // PrettyPhoto Function
    //***************************
    jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();

    jQuery(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'facebook',
        social_tools: '',
        slideshow: 3000,
        autoplay_slideshow: false
    });
    jQuery(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });

    jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function() {
            initialize();
        }
    });

    jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
        custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
        changepicturecallback: function() {
            _bsap.exec();
        }
    });

    //***************************
    // Responsive Video Function
    //***************************
    jQuery(".ec-main-section").fitVids();

    //***************************
    // WordCounter Function
    //***************************
    jQuery(".word-count").counterUp({
        delay: 10,
        time: 1000
    });

    //***************************
	// Skills Function
	//***************************
	jQuery('.skillbar').each(function() {
	    jQuery(this).appear(function() {
	        jQuery(this).find('.count-bar').animate({
	            width:jQuery(this).attr('data-percent')
	        },3000);
	        var percent = jQuery(this).attr('data-percent');
	        jQuery(this).find('.count').html('<span>' + percent + '</span>');
	    });
	});

	jQuery('[data-toggle="tooltip"]').tooltip()

	//***************************
	// Inc-Dec Function
	//***************************
	jQuery(function(){
		jQuery("#ec-inc").on("click", function(){
		  jQuery(":text[name='qty']").val( Number($(":text[name='qty']").val()) + 1 );
		});
		jQuery("#ec-dec").on("click", function(){
		  jQuery(":text[name='qty']").val( Number($(":text[name='qty']").val()) - 1 );
		});
	});
	jQuery(function(){
		jQuery("#ec-incs").on("click", function(){
		  jQuery(":text[name='qtys']").val( Number($(":text[name='qtys']").val()) + 1 );
		});
		jQuery("#ec-decs").on("click", function(){
		  jQuery(":text[name='qtys']").val( Number($(":text[name='qtys']").val()) - 1 );
		});
	});
	jQuery(function(){
		jQuery("#ec-incd").on("click", function(){
		  jQuery(":text[name='qtyd']").val( Number($(":text[name='qtyd']").val()) + 1 );
		});
		jQuery("#ec-decd").on("click", function(){
		  jQuery(":text[name='qtyd']").val( Number($(":text[name='qtyd']").val()) - 1 );
		});
	});

	//***************************
	// tOGGLE sLIDE Function
	//***************************
	jQuery('.ec-shop-filter-sec ul li a').on("click", function(){
        jQuery('.ec-reset-wrap').slideToggle('slow');
    });
    jQuery('.ec-more-options ul li a.flaticon-shoppingcart17').on("click", function(){
        jQuery('.ec-carthover').slideToggle('slow');
    });


});

//***************************
// News FilterAble Function
//***************************
jQuery(function($) {
    $('.ec-portfolio-filter >li').on("click", function(event) {
        event.preventDefault();
        var target = $(this).find('>a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
    $("a.preview").prettyPhoto({
        social_tools: false
    });
    $(window).load(function() {
        $portfolio = $('.ec-portfolio-list');
        $portfolio.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry',
            resizesContainer: true
        });
        $portfolio_selectors = $('.ec-portfolio-filter >li>a');
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });
});

//***************************
// Event FilterAble Function
//***************************
jQuery(function($) {
    $('.ec-event-filter >li').on("click", function(event) {
        event.preventDefault();
        var target = $(this).find('>a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
    $("a.preview").prettyPhoto({
        social_tools: false
    });
    $(window).load(function() {
    	if($( ".ec-eventmasonry-list" ).length){
        $portfolio = $('.ec-eventmasonry-list');
        $portfolio.isotope({
            itemSelector: '.ec-eventmasonry-list > ul > li',
            layoutMode: 'fitRows',
        });
        $portfolio_selectors = $('.ec-event-filter >li>a');
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
           
        });
    }
    });
});
