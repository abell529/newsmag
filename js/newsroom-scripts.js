$(document).ready(function() {

    
	//detect focus of navigation search bar
	$('.navigation .search-section input.search_input').focus( function() {
		$('.navigation .search-section').addClass('active');
	});
	$('.navigation .search-section input.search_input').blur( function() {
		$('.navigation .search-section').removeClass('active');
	});
    
    
	
	
	
	
});//(document).ready