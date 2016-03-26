jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "7 May 2016 12:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
	
	//Tab Switching in About section
	jQuery(function () {
	    jQuery('#aboutTabs a:last').tab('show')
	});



	/******* Navbar Auto-Scroller *********/
	var activeElement = $('nav-home');
	var container = $("#navbar-right");
	window.setInterval(scrollWatch, 1000);

	function scrollWatch() {
  		//Determine which menu item is active
		$("#scrolling-navbar li").each(function( index ) {
			
			if($(this).hasClass("active")){
				
				if($(this).attr('id') != activeElement.attr('id')){			
					activeElement = $(this);
					console.log($(activeElement).attr('id'));

					container.animate({
						scrollLeft: activeElement.offset().left - container.offset().left + container.scrollLeft()
					}, 500);
				}
			}
		});
	}

	//Scroller
	$('.scrolling-navbar ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});


});

