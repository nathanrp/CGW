var CGW = angular.module('cgw', ['ui.router']);

CGW.run(
	['$rootScope', '$state', '$stateParams',
		function ($rootScope,	 $state,	 $stateParams) {

			// It's very handy to add references to $state and $stateParams to the $rootScope
			// so that you can access them from any scope within your applications.For example,
			// <li ui-sref-active="active }"> will set the <li> // to active whenever
			// 'contacts.list' or one of its decendents is active.

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
//				if($(window).width()<768) {
					$('.page').removeClass('open');
//				}
			});

		}
	]
);

CGW.controller('menu', function ($scope) {

	$('.nav-toggle').click(function(){
		$('.page').addClass('open');
	});

	$('.nav-overlay, .nav .active a').bind('click', function() {
      $('.page').removeClass('open');
    });

});

CGW.directive('scroll', function ($document) {
	return function (scope, element, attrs) {

		element.bind('scroll',function(event){
			if(this.scrollTop>0) {
				$(this).closest('[class^="frame-"]').addClass('scrolling');
				$(this).addClass('scrolling');
				$(this).has('.shadow').length ? '' : $(this).append('<div class="shadow"></div>');
			} else {
				$(this).removeClass('scrolling').find('.shadow').remove();
				$(this).closest('.scrolling').removeClass('scrolling');
			}
		});
	}
});

CGW.directive('jqUiButtonset', function ($document) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).buttonset();
		}
	}
});