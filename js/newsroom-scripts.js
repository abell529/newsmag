$(document).ready(function() {

    
	//////////////////////////////////////////////////////////////////////
    // Search bar detect .navigation .search-section
    //////////////////////////////////////////////////////////////////////

    
    //detect focus of navigation search bar
    $('.navigation-top .search-section input.search_input').focus( function() {
        $('.navigation-top .search-section').addClass('active');
    });
    $('.navigation-top .search-section input.search_input').blur( function() {
        $('.navigation-top .search-section').removeClass('active');
    });
    $('.navigation-top .search-section button.search_submit_word').focus( function() {
        $('.navigation-top .search-section').addClass('active');
    });
    $('.navigation-top .search-section button.search_submit_word').blur( function() {
        $('.navigation-top .search-section').removeClass('active');
    });

	//detect focus of navigation search bar - THESE ARE OLD
	/* $('.navigation .search-section input.search_input').focus( function() {
		$('.navigation .search-section').addClass('active');
	});
	$('.navigation .search-section input.search_input').blur( function() {
		$('.navigation .search-section').removeClass('active');
	}); */

	/* $('.mobile-links-nav.active .search-section input.search_input').focus( function() {
		$('.navigation .search-section').addClass('active');
	});
	$('.mobile-links-nav.active .search-section input.search_input').blur( function() {
		$('.navigation .search-section').removeClass('active');
	}); */


	/* ========================================
		This kind of worked - keeping it here
	   ======================================== */
	//detect focus of navigation search bar
	/* $('.navigation-top .search-section .fa-magnifying-glass').click( function() {
		$('.navigation-top .search-section').addClass('active');
		$('.navigation-top .search-section input.search_input').focus();
		console.log("add class from click");
	}); */

	/* $('.navigation-top .search-section .fa-magnifying-glass').blur( function() {
		$('.navigation-top .search-section').removeClass('active');
		console.log("remove class on blur magnifying");
	}); */

	/* $('.navigation-top .search-section input.search_input').focus( function() {
		console.log("Focus on search input");
	}); */

	/* $('.navigation-top .search-section input.search_input').blur( function() {
		$('.navigation-top .search-section').removeClass('active');
		console.log("remove class from search");
	}); */


	/* $(document).click(function(e) {
		if (!$(e.target).is('.navigation-top .search-section .fa-magnifying-glass') && !$(e.target).is('.navigation-top .search-section input.search_input')) {
			$('.navigation-top .search-section').removeClass('active');
			console.log("click anywhere");
		}
	});

	$('.navigation-top .search-section input.search_input').click(function(e) {
        e.stopPropagation();
    });
	$('.menu-trigger').click(function(e) {
        e.stopPropagation();
    }); */


	$('.menu-trigger').click(function(e) {
		$(".menu-trigger").toggleClass('active');
		$(".pub-list-slide").toggleClass('active');
	});

	$('.menu-trigger').on("click touch keypress", function () {
        var content = $('.pub-list-slide');
        var isVisible = content.data('visible');

        if (isVisible) {
            content.animate({ left: '-550px' }, 'fast').data('visible', false);
        } else {
            content.animate({ left: '0px' }, 'fast').data('visible', true);
        }
    });



	/* $('.menu-trigger').click(function() {
        $('.pub-list-slide').slideToggle('fast');
    }); */

	/* $('.menu-trigger').click(function() {
        var content = $('.pub-list-slide');
        var isVisible = content.data('visible');

        if (isVisible) {
            content.animate({ top: '50px' }, 'fast').data('visible', false);
        } else {
            content.animate({ top: '0px' }, 'fast').data('visible', true); 
        }
    }); */


	/* $('.navigation-top .search-section input.search_input').blur( function() {
		$('.navigation-top .search-section').removeClass('active');
	}); */

	

//mobile navigation NEW
$('.mobile-nav').on("click touch keypress", function () {
	$(".mobile-nav .hamburger-nav").toggleClass('active');
	$(".mobile-links-nav").toggleClass('active');
	$('.mobile-links-nav ul.util li.top').attr('tabindex', '0');
	$('.mobile-links-nav ul.util li.top a').attr('tabindex', '0');
	if($('.mobile-links-nav.active').length > 0) {
		$('.mobile-links-nav a').attr('tabindex', '0');
		$('.mobile-links-nav ul.util li ul li a').attr('tabindex', '-1');
		// $('.mobile-links').attr('aria-hidden', 'false');
		// $('#content').css('display','none');
		$('.footer').css('display','none');
		$('.footer-callout').css('display','none');
		$('.mobile-nav').attr('aria-label', 'Mobile navigation close');
	}
	else{
		$('.mobile-links-nav a').attr('tabindex', '-1');
		// $('.mobile-links').attr('aria-hidden', 'true');
		$('#content').css('display','block');
		$('.footer').css('display','block');
		$('.footer-callout').css('display','block');
		$('.mobile-nav').attr('aria-label', 'Mobile navigation button');
	}
});
//mobile navigation nested ul NEW
$('.mobile-links-nav ul.util li').on("click touch keypress", function () {
	$(this).children('ul').addClass('active');
	
	
	$(".mobile-links-nav ul li a").attr('tabindex', '-1');
	$(".mobile-links-nav ul.util li").attr('tabindex', '-1');
	
	$(this).find("ul li a").attr('tabindex', '0');
	$('.mobile-links-nav .back').addClass('active').attr('tabindex', '0');
	
	$('.mobile-links-nav ul.util li ul.active li:first-of-type').focus();
	
	$('.mobile-links-nav ul li').css('display','none');
	$('.mobile-links-nav .btn').css('display','none');
	$('.mobile-links-nav p').css('display','none');
	$(this).css('display','block').css("visibility","hidden");
	$('.mobile-links-nav ul.util li ul.active li').css('display','block').css("visibility","visible");
	
	$('.mobile-links-nav > .container-nav').css('padding-bottom','950px').css('margin-top','-70px');
	
	if($(this).hasClass('students')) {
		$('.mobile-links-nav > .container-nav').css('padding-bottom','850px').css('margin-top','-70px');
	}
	
	if($(this).hasClass('parents')) {
		$('.mobile-links-nav > .container-nav').css('padding-bottom','450px').css('margin-top','-70px');
	}
	
	if($(this).hasClass('alumni')) {
		$('.mobile-links-nav > .container-nav').css('padding-bottom','450px').css('margin-top','-70px');
	}
	
	if($(this).hasClass('facultystaff')) {
		$('.mobile-links-nav > .container-nav').css('padding-bottom','450px').css('margin-top','-70px');
	}
	
	if($(this).hasClass('business')) {
		$('.mobile-links-nav > .container-nav').css('padding-bottom','450px').css('margin-top','-70px');
	}

	$('.mobile-links-nav .back p').css('display','block');
	
});




    $('.mobile-links .back').on("click touch keypress", function () {
	    $('.mobile-links ul.util li ul').removeClass('active');
	    
	    $(".mobile-links ul li a").attr('tabindex', '0');
	    $(".mobile-links ul.util li").attr('tabindex', '0');
		$(".mobile-links ul.util li ul li").attr('tabindex', '-1');
		
	    $(".mobile-links ul.util li ul li a").attr('tabindex', '-1');
	    $(this).removeClass('active').attr('tabindex', '-1');
	    
	    $('.mobile-links .btn').css('display','block');
	    $('.mobile-links ul li').css('display','block').css("visibility","visible");;
	    $('.mobile-links p').css('display','block');
		$('.mobile-links > .container').css('padding-bottom','0').css('margin-top','0');
		$('.mobile-links > .container-nav').css('padding-bottom','0').css('margin-top','0');
		
	    $('.mobile-links ul:first-of-type li:first-of-type a').focus();
	});

	$('.mobile-links-nav .back').on("click touch keypress", function () {
	    $('.mobile-links-nav ul.util li ul').removeClass('active');
	    
	    $(".mobile-links-nav ul li a").attr('tabindex', '0');
	    $(".mobile-links-nav ul.util li").attr('tabindex', '0');
		$(".mobile-links-nav ul.util li ul li").attr('tabindex', '-1');
		
	    $(".mobile-links-nav ul.util li ul li a").attr('tabindex', '-1');
	    $(this).removeClass('active').attr('tabindex', '-1');
	    
	    $('.mobile-links-nav .btn').css('display','block');
	    $('.mobile-links-nav ul li').css('display','block').css("visibility","visible");;
	    $('.mobile-links-nav p').css('display','block');
		$('.mobile-links-nav > .container').css('padding-bottom','0').css('margin-top','0');
		$('.mobile-links-nav > .container-nav').css('padding-bottom','0').css('margin-top','0');
		
	    $('.mobile-links-nav ul:first-of-type li:first-of-type a').focus();
	});
	
	/*
	$(".hide-focus").focus(function() {
	  alert( "Handler for .focus() called." );
	});
	*/

	$(window).keydown(function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		
		//reset focus to top when reaching bottom of mobile navigation
		/* if (code == 9 && $('.mobile-links ul.util li ul.active li:last-of-type a:focus').length) {
	    	$('.mobile-links .back').focus();
		}
		if (code == 9 && $('.mobile-links ul:last-of-type li:last-of-type a:focus').length) {
	    	$('.mobile-nav').focus(); 
		} */
		
		//left and right arrow controls - number statistics
		if (code == 39 && $('.numbers.statistics ul li:focus').length) {
	    	$('.numbers.statistics ul li:focus').next().focus();
		}
		if (code == 37 && $('.numbers.statistics ul li:focus').length) {
	    	$('.numbers.statistics ul li:focus').prev().focus();
		}
		
		//left and right arrow controls - number statistics-small
		if (code == 39 && $('.numbers.statistics-small ul li:focus').length) {
	    	$('.numbers.statistics-small ul li:focus').next().focus();
		}
		if (code == 37 && $('.numbers.statistics-small ul li:focus').length) {
	    	$('.numbers.statistics-small ul li:focus').prev().focus();
		}
		
		//left and right arrow controls - tabbed
		if (code == 39 && $('.tabbed .top .left li:focus').length) {
	    	$('.tabbed .top .left li:focus').next().focus();
		}
		if (code == 37 && $('.tabbed .top .left li:focus').length) {
	    	$('.tabbed .top .left li:focus').prev().focus();
		}
		
		//left and right arrow controls - areas of study
		if (code == 39 && $('.tabber .tabber-handle:focus').length) {
	    	$('.tabber .tabber-handle:focus').next().focus();
		}
		if (code == 37 && $('.tabber .tabber-handle:focus').length) {
	    	$('.tabber .tabber-handle:focus').prev().focus();
		}
		
	});
	
	
	
});//(document).ready