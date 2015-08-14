// sidenav
$(document).ready(function() {

	$('body').on('click', '.hamburger', function(){
		$('body').toggleClass('open');
	});

	$('body').on('click', '.show-toast', function(){
		$('.toast').addClass('burnt');
		setTimeout(
			function() {
				$('.toast').removeClass('burnt');
			}, 3000);
	});

});