

// FIXED MENU POSITION WHEN PAGE SCROLL DOWN

		var navbox = jQuery('.menu-fix-on-scroll');
		jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 240) {
					navbox.addClass("active");	
				} else {
					navbox.removeClass("active");	
				}
			});



	

// prettyPhoto init
jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();