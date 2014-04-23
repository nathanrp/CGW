CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
				.when('/owner/accounting', '/owner/accounting/invoices')
				.otherwise('/owner');

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
						},
						'header@': {
							templateUrl: 'owner/schedule.header.html'
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

				.state('owner.schedule.new.message', {

					url: '/message',
					views: {
						'content@': {
							templateUrl: 'owner/schedule.new.message.html'
						}
					 }
				})
				
				.state('owner.accounting', {
					
					url: '/accounting',
					views: {
						'content@': {
							templateUrl: 'owner/accounting.html'
						}
					 }
				})
				
				.state('owner.accounting.invoices', {
					
					url: '/invoices',
					views: {
						'tab-content@owner.accounting': {
							templateUrl: 'owner/invoices.html'
						}
					 }
				})
				
				.state('owner.accounting.invoices.invoice', {
					
					url: '/invoice',
					views: {
						'tab-content@owner.accounting': {
							templateUrl: 'owner/invoice.html'
						}
					 }
				})
				
				.state('owner.accounting.invoices.invoice.edit', {
					
					url: '/edit',
					views: {
						'content@': {
							templateUrl: 'owner/invoice.edit.html'
						}
					 }
				})
				
				.state('owner.accounting.invoices.invoice.payment', {
					
					url: '/payment',
					views: {
						'content@': {
							templateUrl: 'owner/invoice.payment.html'
						}
					 }
				})
				
				.state('owner.accounting.payroll', {
					
					url: '/payroll',
					views: {
						'tab-content@owner.accounting': {
							templateUrl: 'owner/payroll.html'
						}
					 }
				})
				
				.state('owner.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'owner/clients-requests.html'
						},
						'tab-content@owner.clients': {
							templateUrl: 'owner/clients.html'
						}
					 }
				})
				
				.state('owner.clients.client', {

					url: '/client',
					views: {
						'content@': {
							templateUrl: 'owner/client.html'
						}
					 }
				})
				
				.state('owner.requests', {

					url: '/requests',
					views: {
						'content@': {
							templateUrl: 'owner/clients-requests.html'
						},
						'tab-content@owner.requests': {
							templateUrl: 'owner/requests.html'
						}
					 }
				})
				
				.state('owner.requests.request', {

					url: '/request',
					views: {
						'content@': {
							templateUrl: 'owner/request.html'
						}
					 }
				})

				.state('owner.requests.request.initial', {

					url: '/initial',
					views: {
						'content@': {
							templateUrl: 'owner/request.initial.html'
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
				
				.state('applicant.resume', {

					url: '/resume',
					views: {
						'content@': {
							templateUrl: 'applicant/resume.html'
						}
					 }
				})
				
				.state('applicant.contract', {

					url: '/contract',
					views: {
						'content@': {
							templateUrl: 'applicant/contract.html'
						}
					 }
				})
				
				.state('applicant.w9', {

					url: '/w9',
					views: {
						'content@': {
							templateUrl: 'applicant/w9.html'
						}
					 }
				})

		}
	]
);