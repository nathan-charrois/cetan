$(function() {
	$('.Menu__toggle').on('click', function() {
		$(this).parent('.Menu').toggleClass('Menu--open');
		$('body').toggleClass('Body--noscroll');
	});
});