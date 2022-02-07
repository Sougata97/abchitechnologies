// JavaScript Document
$(document).ready(function(){
	
	// owl-carousel banner 
$('#owldemo1').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: false,
		navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
 
// owl-carousel testimonials 
$('#owldemo2').owlCarousel({
        loop: true,
        nav: false,
        margin:15,
        autoplay: false,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: false,
    // navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
			1200: {
                items: 3
            }
        }
    });

 
// owl-carousel testimonials 
$('#owldemo3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: true,
		// navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
			
        }
    });
	
	
	
	
	
});

