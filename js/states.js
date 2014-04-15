CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
				.when('/caregiver', '/caregiver/skills')
//				.otherwise('/caregiver/skills');

			$stateProvider

				.state('owner', {

					url: '/owner',
					views: {
						'content@': {
							templateUrl: 'owner.html'
						},
						'drawer@': {
							templateUrl: 'owner.drawer.html'
						}
					 }
				})
				
				.state('owner.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'owner.clients.html'
						}
					 }
				})
				
				.state('owner.staff', {
					url: '/staff',
					views: {
						'content@': {
							templateUrl: 'owner.staff.html'
						},
						'tab-content@owner.staff': {
							templateUrl: 'owner.caregivers.html'
						}
					 }
				})
				
				.state('owner.applicants', {
					url: '/applicants',
					views: {
						'content@': {
							templateUrl: 'owner.staff.html'
						},
						'tab-content@owner.applicants': {
							templateUrl: 'owner.applicants.html'
						}
					 }
				})
				
				.state('owner.applicants.applicant', {

					url: '/applicant',
					views: {
						'content@': {
							templateUrl: 'owner.applicant.html'
						}
					 }
				})

				.state('caregiver', {

					url: '/caregiver',
					views: {
						'content@': {
							templateUrl: 'caregiver.html'
						},
						'drawer@': {
							templateUrl: 'caregiver.drawer.html'
						}
					 }
				})
				
				.state('caregiver.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'caregiver.schedule.html'
						}
					 }
				})
				
				.state('caregiver.skills', {

					url: '/skills',
					views: {
						'tab-content': {
							templateUrl: 'caregiver.skills.html'
						}
					 }
				})
				
				.state('caregiver.contact', {

					url: '/contact',
					views: {
						'tab-content': {
							templateUrl: 'caregiver.contact.html'
						}
					 }
				})

				.state('caregiver.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'caregiver.clients.html'
						}
					 }
				})
				
				.state('caregiver.clients.client', {

					url: '/client',
					views: {
						'content@': {
							templateUrl: 'client.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.tasks', {

					url: '/tasks',
					views: {
						'tab-content': {
							templateUrl: 'client.tasks.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.schedule', {

					url: '/schedule',
					views: {
						'tab-content': {
							templateUrl: 'client.schedule.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.notes', {

					url: '/notes',
					views: {
						'tab-content': {
							templateUrl: 'client.notes.html'
						}
					 }
				})
				
/*
				.state('caregiver.clients.client.tasks.checkout', {

					parent: 'caregiver.clients.client.tasks',
					url: '/checkout',
					onEnter: function($stateParams, $state) {
						alert('hello')
					}
				})
*/
		}
	]
);