(function($) {
	'use strict';	
	/*
	Dropdown
	=========================== */
	$('.ul.navbar-nav li.dropdown').on("mouseenter", function() {
		$(this).addClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
	});
	$('.ul.navbar-nav li.dropdown').on("mouseleave", function() {
		$(this).removeClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	});
	/*
	Header
	=========================== */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$(".navbar-default").addClass("top-nav-collapse");
		} else {
			$(".navbar-default").removeClass("top-nav-collapse");
		}
	});

})(jQuery);

