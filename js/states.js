CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
//				.otherwise('/caregiver/skills');

			$stateProvider

				.state('owner', {

					url: '/owner',
					views: {
						'content@': {
							templateUrl: 'owner/owner.html'
						},
						'drawer@': {
							templateUrl: 'owner/drawer.html'
						}
					 }
				})
				
				.state('owner.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'owner/schedule.html'
						}
					 }
				})
				
				.state('owner.schedule.new', {

					url: '/new',
					views: {
						'content@': {
							templateUrl: 'owner/schedule.new.html'
						}
					 }
				})
				
				.state('owner.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'owner/clients.html'
						}
					 }
				})
				
				.state('owner.caregivers', {
					url: '/caregivers',
					views: {
						'content@': {
							templateUrl: 'owner/caregivers-applicants.html'
						},
						'tab-content@owner.caregivers': {
							templateUrl: 'owner/caregivers.html'
						}
					 }
				})
				
				.state('owner.caregivers.caregiver', {
					url: '/caregiver',
					views: {
						'content@': {
							templateUrl: 'owner/caregiver.html'
						}
					 }
				})
				
				.state('owner.applicants', {
					url: '/applicants',
					views: {
						'content@': {
							templateUrl: 'owner/caregivers-applicants.html'
						},
						'tab-content@owner.applicants': {
							templateUrl: 'owner/applicants.html'
						}
					 }
				})
				
				.state('owner.applicants.applicant', {

					url: '/applicant',
					views: {
						'content@': {
							templateUrl: 'owner/applicant.html'
						}
					 }
				})

				.state('caregiver', {

					url: '/caregiver',
					views: {
						'content@': {
							templateUrl: 'caregiver/caregiver.html'
						},
						'drawer@': {
							templateUrl: 'caregiver/drawer.html'
						}
					 }
				})
				
				.state('caregiver.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'caregiver/schedule.html'
						}
					 }
				})
				
				.state('caregiver.skills', {

					url: '/skills',
					views: {
						'content@': {
							templateUrl: 'caregiver/skills.html'
						}
					 }
				})
				
				.state('caregiver.contact', {

					url: '/contact',
					views: {
						'tab-content': {
							templateUrl: 'caregiver/contact.html'
						}
					 }
				})

				.state('caregiver.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'caregiver/clients.html'
						}
					 }
				})
				
				.state('caregiver.clients.client', {

					url: '/client',
					views: {
						'content@': {
							templateUrl: 'caregiver/client.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.tasks', {

					url: '/tasks',
					views: {
						'tab-content': {
							templateUrl: 'caregiver/client.tasks.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.schedule', {

					url: '/schedule',
					views: {
						'tab-content': {
							templateUrl: 'caregiver/client.schedule.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.notes', {

					url: '/notes',
					views: {
						'tab-content': {
							templateUrl: 'caregiver/client.notes.html'
						}
					 }
				})
				
				.state('applicant', {

					url: '/applicant',
					views: {
						'content@': {
							templateUrl: 'applicant/applicant.html'
						},
						'drawer@': {
							templateUrl: 'applicant/drawer.html'
						}
					 }
				})
				
				.state('applicant.application', {

					url: '/application',
					views: {
						'content@': {
							templateUrl: 'applicant/application.html'
						}
					 }
				})
				
				.state('applicant.application.contract', {

					url: '/contract',
					views: {
						'content@': {
							templateUrl: 'applicant/contract.html'
						}
					 }
				})

		}
	]
);