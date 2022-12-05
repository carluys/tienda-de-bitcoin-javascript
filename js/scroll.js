$(document).ready(function () {
	var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	var height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

	$(window).scroll(function () {
		if ($(this).scrollTop() > height / 2) {
			$('.scroll').fadeIn("slow");
		} else {
			$('.scroll').fadeOut("slow");
		}
	});

	$('.scroll').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

});