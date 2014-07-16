CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
				.otherwise('/404');

			$stateProvider

				.state('404', {

					url: '/404',
					views: {
						'content@': {
							templateUrl: '404.html'
						},
						'drawer@': {
							templateUrl: 'franchisee/drawer.html'
						},
						'header@': {
							templateUrl: '404.header.html'
						}
					 }
				})

				.state('franchisee', {

					url: '/franchisee',
					views: {
						'content@': {
							templateUrl: 'franchisee/franchisee.html'
						},
						'drawer@': {
							templateUrl: 'franchisee/drawer.html'
						},
						'header@': {
							templateUrl: 'franchisee/header.html'
						}
					 }
				})
				
				.state('franchisee.schedules', {

					url: '/schedules',
					views: {
						'content@': {
							templateUrl: 'franchisee/schedules.html'
						},
						'header@': {
							templateUrl: 'franchisee/schedules.header.html'
						}
					 }
				})
				
				.state('franchisee.schedules.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'franchisee/schedule.html'
						},
						'header@': {
							templateUrl: 'franchisee/schedules.header.html'
						}
					 }
				})
				
				.state('franchisee.invoices', {
					
					url: '/invoices',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoices.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoices.header.html'
						}
					 }
				})
				
				.state('franchisee.invoices.invoice', {
					
					url: '/invoice',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoices.header.html'
						}
					 }
				})
				
				.state('franchisee.invoices.invoice.edit', {
					
					url: '/edit',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.edit.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoice.header.html'
						}
					 }
				})
				
				.state('franchisee.invoices.invoice.payment', {
					
					url: '/payment',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.payment.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoice.header.html'
						}
					 }
				})
				
				.state('franchisee.selecter', {
					
					url: '/caregiver/select',
					views: {
						'content@': {
							templateUrl: 'franchisee/selecter.html'
						},
						'header@': {
							templateUrl: 'franchisee/selecter.header.html'
						}
					 }
				})
				
				.state('franchisee.clients', {

					url: '/clients',
					views: {
						'content@': {
							templateUrl: 'franchisee/clients.html'
						},
						'header@': {
							templateUrl: 'franchisee/clients.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.client', {

					url: '/client',
					views: {
						'header@': {
							templateUrl: 'franchisee/clients.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.info', {

					url: '/information',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.info.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.info.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.edit.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.info.edit.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.assessment', {

					url: '/assessment',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.assessment.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.schedule', {

					url: '/schedule',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.schedule.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.schedule.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.edit.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/schedule.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.schedule.edit.message', {

					url: '/message',
					views: {
						'content@': {
							templateUrl: 'franchisee/schedule.message.html'
						},
						'header@': {
							templateUrl: 'franchisee/schedule.message.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.invoices', {

					url: '/invoices',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/invoices.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.tasks', {

					url: '/tasks',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.tasks.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.historys', {

					url: '/history',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.historys.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.historys.history', {

					url: '/history',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.history.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.history.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.contract', {

					url: '/contract',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.contract.html'
						}
					 }
				})
				
				.state('franchisee.requests', {

					url: '/requests',
					views: {
						'content@': {
							templateUrl: 'franchisee/requests.html'
						},
						'header@': {
							templateUrl: 'franchisee/clients.header.html'
						}
					 }
				})
				
				.state('franchisee.requests.request', {

					url: '/request',
					views: {
						'content@': {
							templateUrl: 'franchisee/request.html'
						}
					 }
				})

				.state('franchisee.requests.request.request', {

					url: '/request',
					views: {
						'content@': {
							templateUrl: 'client/request.html'
						},
						'header@': {
							templateUrl: 'client/request.header.html'
						}
					 }
				})
				
				.state('franchisee.caregivers', {
					url: '/caregivers',
					views: {
						'content@': {
							templateUrl: 'franchisee/caregivers.html'
						},
						'header@': {
							templateUrl: 'franchisee/caregivers.header.html'
						}
					 }
				})
				
				.state('franchisee.caregivers.caregiver', {
					url: '/caregiver',
					views: {
						'content@': {
							templateUrl: 'franchisee/caregiver.html'
						}
					 }
				})
				
				.state('franchisee.applicants', {
					url: '/applicants',
					views: {
						'content@': {
							templateUrl: 'franchisee/applicants.html'
						},
						'header@': {
							templateUrl: 'franchisee/caregivers.header.html'
						}
					 }
				})
				
				.state('franchisee.applicants.applicant', {

					url: '/applicant',
					views: {
						'content@': {
							templateUrl: 'franchisee/applicant.html'
						}
					 }
				})
				
				.state('franchisee.admin', {
					url: '/admin',
					views: {
						'content@': {
							templateUrl: 'franchisee/admin.html'
						},
						'header@': {
							templateUrl: 'franchisee/admin.header.html'
						}
					 }
				})
				
				.state('franchisee.admin.profile', {
					url: '/client',
					views: {
						'content@': {
							templateUrl: 'franchisee/profile.html'
						},
						'header@': {
							templateUrl: 'franchisee/admin.header.html'
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
							templateUrl: 'franchisee/schedules.html'
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
							templateUrl: 'franchisee/client.schedule.html'
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
				
				.state('family.profile', {

					url: '/profile',
					views: {
						'content@': {
							templateUrl: 'family/profile.html'
						},
						'header@': {
							templateUrl: 'family/profile.header.html'
						}
					 }
				})
				
				.state('family.profile.info', {

					url: '/information',
					views: {
						'content@': {
							templateUrl: 'franchisee/client.info.html'
						},
						'header@': {
							templateUrl: 'family/info.header.html'
						}
					 }
				})
				
				.state('family.profile.schedule', {

					url: '/schedule',
					views: {
						'content@': {
							templateUrl: 'family/schedule.html'
						},
						'header@': {
							templateUrl: 'family/schedule.header.html'
						}
					 }
				})
				
				.state('family.historys', {

					url: '/history',
					views: {
						'content@': {
							templateUrl: 'franchisee/client.historys.html'
						},
						'header@': {
							templateUrl: 'family/history.header.html'
						}
					 }
				})
				
				.state('family.billings', {

					url: '/billing',
					views: {
						'content@': {
							templateUrl: 'family/billings.html'
						},
						'header@': {
							templateUrl: 'family/billings.header.html'
						}
					 }
				})
				
				.state('family.agreement', {

					url: '/agreement',
					views: {
						'content@': {
							templateUrl: 'franchisee/client.contract.html'
						},
						'header@': {
							templateUrl: 'family/agreement.header.html'
						}
					 }
				})
				
				.state('super', {

					url: '/super',
					views: {
						'content@': {
							templateUrl: 'super/super.html'
						},
						'drawer@': {
							templateUrl: 'super/drawer.html'
						},
						'header@': {
							templateUrl: 'super/header.html'
						}
					 }
				})
				
				.state('super.franchisees', {

					url: '/franchisees',
					views: {
						'content@': {
							templateUrl: 'super/franchisees.html'
						},
						'header@': {
							templateUrl: 'super/franchisees.header.html'
						}
					 }
				})

		}
	]
);