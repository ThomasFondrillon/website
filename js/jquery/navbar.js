$(function() {

 	/** Manage the navbar */
 	var navbarLimit = $(".flow-navbar").offset().top;
 	var navbar = $(".fixed-navbar");
 	var body = $("body");

	var adjustNavbar = function(){
		if (body.scrollTop() > navbarLimit){
			// Set visible
			navbar.show();
		} else {
			// Set invisible 
			navbar.hide();
		}
	};
	$("body").bind("mousewheel scroll", adjustNavbar);
	adjustNavbar();

	// Using delegate insure it will be executed
	// *after* the event is processed by the browser
	$(document).delegate('.navbar a', 'click', function(e) {
		goToByScroll($(this).attr("href"));
		e.preventDefault();
	});
	
	function goToByScroll(id){
		var offset = $(id).offset().top;
		offset = $offset - 20;
		$('html,body').animate({scrollTop: $offset}, 400, function(){
			adjustNavbar();
			$('[data-spy="scroll"]').each(function () {
				var $spy = $(this).scrollspy('refresh');
			});
		});
	}


});