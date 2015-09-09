// create the module and name it bfxGL
var cgw = angular.module('cgw', ['ngRoute','ui.bootstrap']);

// configure our routes
cgw.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			redirectTo: '/clients'
		})
		.when('/clients', {
			templateUrl : 'clients/-clients.html',
			title: 'Clients'
		})
		.when('/clients/new', {
			templateUrl : 'clients/-new.html',
			title: 'New Client'
		})
		.when('/clients/saved', {
			templateUrl : 'clients/-clients.html',
			title: 'Clients',
			controller: 'saved-client'
		})
		.when('/clients/client', {
			templateUrl : 'clients/-client.html',
			title: 'Chowrichzy Wisdomy Octopios'
		})
		.when('/clients/client/schedule', {
			templateUrl : 'clients/-schedule.html',
			title: 'Care Schedule'
		})
		.when('/clients/client/schedule/edit', {
			templateUrl : 'clients/-schedule-edit.html',
			title: 'Care Schedule for Chowrichzy Wisdomy Octopios'
		})
		.when('/schedules', {
			templateUrl : 'schedules/-schedules.html',
			title: 'Care Schedules',
			controller: 'schedule-view'
		})
		.otherwise({
			redirectTo: '/'
		});

});

cgw.run(['$rootScope', '$route', function($rootScope, $route) {

	$rootScope.$on('$routeChangeStart', function() {
		$('body').removeClass('open');
	});

	$rootScope.$on('$routeChangeSuccess', function() {
		$rootScope.title = $route.current.title
	});

}]);