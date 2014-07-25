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
			
			var spinner
			
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
				$('body').removeClass('open');

				spinner = new Spinner().spin();
				$('body').append('<div class="spinner-overlay"/>');
				$('body').append(spinner.el);
			});
			
			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
				$('.spinner-overlay').remove();
				spinner.stop();
			});

		}
	]
);

$(document).ready(function() {

	$('body').on('click', '.nav-toggle', function(){
		$('body').toggleClass('open');
	});


});

CGW.controller('menu', function ($scope) {

	$('.nav-overlay, .nav .active a, .header').bind('click', function() {
      $('body').removeClass('open');
    });

});

CGW.directive('back', function ($document) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click',function(event) {
				window.history.back();
			});
		}
	}
});

CGW.controller('form',['$scope', '$state', function($scope,$state){
	
	if ($state.includes('super')){
		$('input,select,textarea').attr('readonly',true).attr('disabled',true);
		$('.wrap-edit').wrap('<fieldset class=\"editable\" />');
	}

}]);

CGW.directive('done', function ($document) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click',function(event) {
				var l = Ladda.create(this);
				l.start();
				setTimeout(function(){
					l.stop();
					window.history.back();
				}, 2000)
			});
		}
	}
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

CGW.directive('centerMe', function ($document) {
	return function (scope, element, attrs) {

		var a = $(window).width();
		var b = $(element).width();

		$(element).css({
			'left':(a-b)/2
		})
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

CGW.directive('jqSortable', function ($document) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).sortable({
				handle: '.handle',
				change: function(event,ui) {
					$('.task-list li').each(function() {
			            $(this).children('.number').html($(this).index())
			        });
				},
				update: function(event,ui) {
					$('.task-list li').each(function() {
			            $(this).children('.number').html($(this).index()+1)
			        });
				}
			});
			$(element).disableSelection();
		}
	}
});

CGW.directive('randomId',function($document){
	return function (scope, element, attrs) {
		var a = Math.floor(Math.random()*999999999)
		if($(element).is('input')) {
			$(element).val(a);
		} else {
			$(element).text(a);
		}
	}
});

CGW.directive('randomNumber',function($document){
	return function (scope, element, attrs) {
		var a = Math.floor(Math.random()*999999999)
		var b = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		if($(element).is('input')) {
			$(element).val(b);
		} else {
			$(element).text(b);
		}
	}
});

CGW.directive('randomSmallNumber',function($document){
	return function (scope, element, attrs) {
		var a = Math.floor(Math.random()*9)
		var b = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		if($(element).is('input')) {
			$(element).val(b);
		} else {
			$(element).text(b);
		}
	}
});

CGW.directive('randomMoney',function($document){
	return function (scope, element, attrs) {
		var a = Math.floor(Math.random()*9999)
		function format(n, currency) {
		    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		}
		if($(element).is('input')) {
			$(element).val(format(a,''));
		} else {
			$(element).text(format(a, '$'));
		}
	}
});

CGW.directive('randomName',function($document){
	return function (scope, element, attrs) {
		var names = ['Chowrichzy Wisdomy Octopios', 'Bruce Wayne', 'Natalia Allanovna Romanova', 'Loki Laufeyson', 'Remy LeBeau', 'Alec Holland', 'Raven Darkholme', 'Maz &lsquo;Magnus&rsquo; Eisenhardt', 'Reed Richards', 'Obadiah Stane', 'Clark Kent', 'Charles Francis Xavier', 'Rocket Raccoon',];
		$(element).html(names[Math.floor(Math.random()*names.length)]);
	}
});

CGW.directive('jqDatepicker',function($document){
	return function (scope, element, attrs) {
		if(!Modernizr.touch) {
			$(element).datepicker({
				nextText: '',
				prevText: '',
				showButtonPanel: true
			});
		}
	}
});