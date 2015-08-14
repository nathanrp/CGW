// create the module and name it bfxGL
var cgw = angular.module('cgw', ['ngRoute','ui.bootstrap']);

// configure our routes
cgw.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			redirectTo: '/about'
		})
		.when('/about', {
			templateUrl : 'about/-about.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});
