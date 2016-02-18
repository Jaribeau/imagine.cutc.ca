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
	})

	
	//Scroll Menu
	// function menuToggle()
	// {
	// 	var windowWidth = $(window).width();

	// 	if(windowWidth > 767 ){
	// 		$(window).on('scroll', function(){
	// 			if( $(window).scrollTop()>$(window).height()){
	// 				$('.main-nav').addClass('fixed-menu animated slideInDown');
	// 				$('.navbar-brand img').removeClass('hide');
	// 			} else {
	// 				$('.main-nav').removeClass('fixed-menu animated slideInDown');
	// 				$('.navbar-brand img').addClass('hide');
	// 			}
	// 		});
	// 	}else{
			
	// 		$('.main-nav').addClass('fixed-menu animated slideInDown');
				
	// 	}
	// }

	// menuToggle();

	// $( window ).resize(function() {
	// 	menuToggle();
	// });

	$('.scrolling-navbar ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

	

	// Signup Form.
	(function() {

		// Vars.
			var $form = document.querySelectorAll('#signup-form')[0],
				$submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
				$message;

		// Bail if addEventListener isn't supported.
			if (!('addEventListener' in $form))
				return;

		// Message.
			$message = document.createElement('span');
				$message.classList.add('message');
				$form.appendChild($message);

			$message._show = function(type, text) {

				$message.innerHTML = text;
				$message.classList.add(type);
				$message.classList.add('visible');

				window.setTimeout(function() {
					$message._hide();
				}, 3000);

			};

			$message._hide = function() {
				$message.classList.remove('visible');
			};

		// Events.
		// Note: If you're *not* using AJAX, get rid of this event listener.
			$form.addEventListener('submit', function(event) {

				event.stopPropagation();
				event.preventDefault();

			    var email = document.getElementById("email").value;

				if(email.length > 0)
				{
					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					//Submit form data here
					console.log("Attempting to post...");
			    
					$.ajax({
				    url: 'https://cutc.us10.list-manage.com/subscribe/post-json?u=73d566326ae6bb629b42fb5fd&id=8e1a7375e8&c=?',
				    //url: 'https://us10.api.mailchimp.com/3.0/lists/8e1a7375e8/members&c=?',
				    headers: {
				        'Authorization':'Basic YXV0aGhoaGg6OWMxYmEwNDc1ZGUzZDg5ODY0MWVjZDM4MzNkNzQ0ZDAtdXMxMA==',
				        'Content-Type':'application/json'
				    },
				    type: 'POST',
				    dataType: 'json',
    				contentType: 'application/json; charset=utf-8',
				    data:
				    {
					  "EMAIL":email,
					  "status":"subscribed",
					  "send_welcome":"false"
					},
				    success: function(data){
				    	console.log('succes: '+ JSON.stringify(data));
						$message._show('success', 'Thank you!');
						$submit.disabled = false;
						$form.reset();
				    },
				    error: function(err){
				    	console.log('error: '+ JSON.stringify(err));
						$message._show('failure', 'Something went wrong. Please try again.');
						$submit.disabled = false;
				    }
				  });
				}


			});

	})();



});

