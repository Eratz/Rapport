// listen for scroll
var positionElementInPage = $('#zone-menu').offset().top;
$(window).scroll(
	function() {
		if ($(window).scrollTop() >= positionElementInPage) {
			// fixed
			$('#zone-menu').addClass("floatable");
		} else {
			// relative
			$('#zone-menu').removeClass("floatable");
		}
	}
);