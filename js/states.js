CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
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
						},
						'header@': {
							templateUrl: 'owner/header.html'
						}
					 }
				})
				
				.state('owner.schedules', {

					url: '/schedules',
					views: {
						'content@': {
							templateUrl: 'owner/schedules.html'
						},
						'header@': {
							templateUrl: 'owner/schedules.header.html'
						}
					 }
				})
				
				.state('owner.schedules.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'owner/schedule.html'
						},
						'header@': {
							templateUrl: 'owner/schedules.header.html'
						}
					 }
				})
				
				.state('owner.invoices', {
					
					url: '/invoices',
					views: {
						'content@': {
							templateUrl: 'owner/invoices.html'
						},
						'header@': {
							templateUrl: 'owner/invoices.header.html'
						}
					 }
				})
				
				.state('owner.invoices.invoice', {
					
					url: '/invoice',
					views: {
						'content@': {
							templateUrl: 'owner/invoice.html'
						},
						'header@': {
							templateUrl: 'owner/invoices.header.html'
						}
					 }
				})
				
				.state('owner.invoices.invoice.edit', {
					
					url: '/edit',
					views: {
						'content@': {
							templateUrl: 'owner/invoice.edit.html'
						},
						'header@': {
							templateUrl: 'owner/invoice.header.html'
						}
					 }
				})
				
				.state('owner.invoices.invoice.payment', {
					
					url: '/payment',
					views: {
						'content@': {
							templateUrl: 'owner/invoice.payment.html'
						},
						'header@': {
							templateUrl: 'owner/invoice.header.html'
						}
					 }
				})
				
				.state('owner.selecter', {
					
					url: '/caregiver/select',
					views: {
						'content@': {
							templateUrl: 'owner/selecter.html'
						},
						'header@': {
							templateUrl: 'owner/selecter.header.html'
						}
					 }
				})
				
				.state('owner.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'owner/clients.html'
						},
						'header@': {
							templateUrl: 'owner/clients.header.html'
						}
					 }
				})
				
				.state('owner.clients.client', {

					url: '/client',
					views: {
						'header@': {
							templateUrl: 'owner/clients.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.html'
						}
					 }
				})
				
				.state('owner.clients.client.info', {

					url: '/information',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.info.html'
						}
					 }
				})
				
				.state('owner.clients.client.info.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'owner/client.edit.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.info.edit.html'
						}
					 }
				})
				
				.state('owner.clients.client.assessment', {

					url: '/assessment',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.assessment.html'
						}
					 }
				})
				
				.state('owner.clients.client.schedule', {

					url: '/schedule',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.schedule.html'
						}
					 }
				})
				
				.state('owner.clients.client.schedule.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'owner/client.edit.header.html'
						},
						'content@': {
							templateUrl: 'owner/schedule.html'
						}
					 }
				})
				
				.state('owner.clients.client.schedule.edit.message', {

					url: '/message',
					views: {
						'content@': {
							templateUrl: 'owner/schedule.message.html'
						},
						'header@': {
							templateUrl: 'owner/schedule.message.header.html'
						}
					 }
				})
				
				.state('owner.clients.client.invoices', {

					url: '/invoices',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/invoices.html'
						}
					 }
				})
				
				.state('owner.clients.client.tasks', {

					url: '/tasks',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.tasks.html'
						}
					 }
				})
				
				.state('owner.clients.client.historys', {

					url: '/history',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.historys.html'
						}
					 }
				})
				
				.state('owner.clients.client.historys.history', {

					url: '/history',
					views: {
						'header@': {
							templateUrl: 'owner/client.history.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.history.html'
						}
					 }
				})
				
				.state('owner.clients.client.contract', {

					url: '/contract',
					views: {
						'header@': {
							templateUrl: 'owner/client.header.html'
						},
						'content@': {
							templateUrl: 'owner/client.contract.html'
						}
					 }
				})
				
				.state('owner.requests', {

					url: '/requests',
					views: {
						'content@': {
							templateUrl: 'owner/requests.html'
						},
						'header@': {
							templateUrl: 'owner/clients.header.html'
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
						},
						'header@': {
							templateUrl: 'applicant/edit.header.html'
						}
					 }
				})
				
				.state('owner.caregivers', {
					url: '/caregivers',
					views: {
						'content@': {
							templateUrl: 'owner/caregivers.html'
						},
						'header@': {
							templateUrl: 'owner/caregivers.header.html'
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
							templateUrl: 'owner/applicants.html'
						},
						'header@': {
							templateUrl: 'owner/caregivers.header.html'
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
				
				.state('owner.admin', {
					url: '/admin',
					views: {
						'content@': {
							templateUrl: 'owner/admin.html'
						},
						'header@': {
							templateUrl: 'owner/admin.header.html'
						}
					 }
				})
				
				.state('owner.admin.profile', {
					url: '/client',
					views: {
						'content@': {
							templateUrl: 'owner/profile.html'
						},
						'header@': {
							templateUrl: 'owner/admin.header.html'
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
						},
						'header@': {
							templateUrl: 'caregiver/header.html'
						}
					 }
				})
				
				.state('caregiver.profile', {

					url: '/profile',
					views: {
						'content@': {
							templateUrl: 'caregiver/profile.html'
						},
						'drawer@': {
							templateUrl: 'caregiver/drawer.html'
						},
						'header@': {
							templateUrl: 'caregiver/header.html'
						}
					 }
				})
				
				.state('caregiver.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'owner/schedules.html'
						},
						'header@': {
							templateUrl: 'caregiver/schedules.header.html'
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
						},
						'header@': {
							templateUrl: 'caregiver/clients.header.html'
						}
					 }
				})
				
				.state('caregiver.clients.client', {

					url: '/client',
					views: {
						'content@': {
							templateUrl: 'caregiver/client.html'
						},
						'header@': {
							templateUrl: 'caregiver/clients.header.html'
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
							templateUrl: 'owner/client.schedule.html'
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
						},
						'header@': {
							templateUrl: 'applicant/header.html'
						}
					 }
				})
				
				.state('applicant.resume', {

					url: '/resume',
					views: {
						'content@': {
							templateUrl: 'applicant/resume.html'
						},
						'header@': {
							templateUrl: 'applicant/edit.header.html'
						}
					 }
				})
				
				.state('applicant.contract', {

					url: '/contract',
					views: {
						'content@': {
							templateUrl: 'applicant/contract.html'
						},
						'header@': {
							templateUrl: 'applicant/edit.header.html'
						}
					 }
				})
				
				.state('applicant.w9', {

					url: '/w9',
					views: {
						'content@': {
							templateUrl: 'applicant/w9.html'
						},
						'header@': {
							templateUrl: 'applicant/edit.header.html'
						}
					 }
				})
				
				.state('family', {

					url: '/family',
					views: {
						'content@': {
							templateUrl: 'family/family.html'
						},
						'drawer@': {
							templateUrl: 'family/drawer.html'
						},
						'header@': {
							templateUrl: 'family/header.html'
						}
					 }
				})

		}
	]
);