$(document).ready(function() {

    


	//detect focus of navigation search bar
	$('.navigation .search-section input.search_input').focus( function() {
		$('.navigation .search-section').addClass('active');
	});
	$('.navigation .search-section input.search_input').blur( function() {
		$('.navigation .search-section').removeClass('active');
	});

	$('.mobile-links-nav.active .search-section input.search_input').focus( function() {
		$('.navigation .search-section').addClass('active');
	});
	$('.mobile-links-nav.active .search-section input.search_input').blur( function() {
		$('.navigation .search-section').removeClass('active');
	});

	//detect focus of navigation search bar
	$('.navigation-top .search-section .fa-magnifying-glass').click( function() {
		$('.navigation-top .search-section.form').addClass('active');
		$('.search-section.active input.search_input').focus();
	});

	$('.search-section.active input.search_input').blur( function() {
		$('.navigation-top .search-section.form').removeClass('active');
	});
	/* $('.navigation-top .search-section input.search_input').blur( function() {
		$('.navigation-top .search-section').removeClass('active');
	}); */

	
    
    //mobile navigation
    $('.mobile-nav').on("click touch keypress", function () {
		$(".mobile-nav .hamburger").toggleClass('active');
		$(".mobile-links").toggleClass('active');
		$('.mobile-links ul.util li.top').attr('tabindex', '0');
		$('.mobile-links ul.util li.top a').attr('tabindex', '0');
		if($('.mobile-links.active').length > 0) {
			$('.mobile-links a').attr('tabindex', '0');
			$('.mobile-links ul.util li ul li a').attr('tabindex', '-1');
			// $('.mobile-links').attr('aria-hidden', 'false');
			// $('#content').css('display','none');
			$('.footer').css('display','none');
			$('.footer-callout').css('display','none');
			$('.mobile-nav').attr('aria-label', 'Mobile navigation close');
		}
		else{
			$('.mobile-links a').attr('tabindex', '-1');
			// $('.mobile-links').attr('aria-hidden', 'true');
			$('#content').css('display','block');
			$('.footer').css('display','block');
			$('.footer-callout').css('display','block');
			$('.mobile-nav').attr('aria-label', 'Mobile navigation button');
		}
    });
    //mobile navigation nested ul
    $('.mobile-links ul.util li').on("click touch keypress", function () {
	    $(this).children('ul').addClass('active');
		
	    
	    $(".mobile-links ul li a").attr('tabindex', '-1');
	    $(".mobile-links ul.util li").attr('tabindex', '-1');
	    
	    $(this).find("ul li a").attr('tabindex', '0');
	    $('.mobile-links .back').addClass('active').attr('tabindex', '0');
	    
	    $('.mobile-links ul.util li ul.active li:first-of-type').focus();
	    
	    $('.mobile-links ul li').css('display','none');
	    $('.mobile-links .btn').css('display','none');
	    $('.mobile-links p').css('display','none');
	    $(this).css('display','block').css("visibility","hidden");
	    $('.mobile-links ul.util li ul.active li').css('display','block').css("visibility","visible");
		
		$('.mobile-links > .container').css('padding-bottom','950px').css('margin-top','-70px');
		
		if($(this).hasClass('students')) {
			$('.mobile-links > .container').css('padding-bottom','850px').css('margin-top','-70px');
		}
		
		if($(this).hasClass('parents')) {
			$('.mobile-links > .container').css('padding-bottom','450px').css('margin-top','-70px');
		}
		
		if($(this).hasClass('alumni')) {
			$('.mobile-links > .container').css('padding-bottom','450px').css('margin-top','-70px');
		}
		
		if($(this).hasClass('facultystaff')) {
			$('.mobile-links > .container').css('padding-bottom','450px').css('margin-top','-70px');
		}
		
		if($(this).hasClass('business')) {
			$('.mobile-links > .container').css('padding-bottom','450px').css('margin-top','-70px');
		}

	    $('.mobile-links .back p').css('display','block');
	    
	});

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