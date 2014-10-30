CGW.config(
	[ '$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider
				.when('', '/signin')
				.when('/caregiver/clients/client', '/caregiver/clients/client/tasks')
				.when('/franchisee/clients', '/franchisee/clients/clients')
				.when('/franchisee/caregivers', '/franchisee/caregivers/caregivers')
				.when('/franchisee/reports', '/franchisee/reports/invoices')
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
				
				.state('signin', {

					url: '/signin',
					views: {
						'content@': {
							templateUrl: 'signin.html'
						},
						'drawer@': {
							templateUrl: 'signin.drawer.html'
						},
						'header@': {
							templateUrl: 'signin.header.html'
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
				
				.state('franchisee.reports', {

					url: '/reports',
					views: {
						'content@': {
							templateUrl: 'franchisee/reports.html'
						},
						'header@': {
							templateUrl: 'franchisee/reports.header.html'
						}
					 }
				})
				
				.state('franchisee.reports.invoices', {

					url: '/invoices',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/invoices.html'
						}
					 }
				})
				
				.state('franchisee.reports.invoices.invoice', {
					
					url: '/invoice',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoice.header.html'
						}
					 }
				})
				
				.state('franchisee.reports.invoices.invoice.edit', {
					
					url: '/edit',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.edit.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoice.edit.header.html'
						}
					 }
				})
				
				.state('franchisee.reports.invoices.invoice.payment', {
					
					url: '/payment',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoice.payment.html'
						},
						'header@': {
							templateUrl: 'franchisee/invoice.payment.header.html'
						}
					 }
				})
				
				.state('franchisee.reports.payrolls', {

					url: '/payrolls',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/payrolls.html'
						}
					 }
				})
				
				.state('franchisee.reports.payrolls.payroll', {
					
					url: '/payroll',
					views: {
						'content@': {
							templateUrl: 'franchisee/payroll.html'
						},
						'header@': {
							templateUrl: 'franchisee/payroll.header.html'
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
				
				.state('franchisee.clients.clients', {

					url: '/clients',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/clients.clients.html'
						}
					 }
				})
				
				.state('franchisee.clients.new', {

					url: '/new',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.new.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.new.html'
						}
					 }
				})
				
				.state('franchisee.clients.client', {

					url: '/client',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.header.html'
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
							templateUrl: 'franchisee/client.info.header.html'
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
							templateUrl: 'franchisee/client.schedule.header.html'
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
							templateUrl: 'franchisee/schedule.header.html'
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
							templateUrl: 'franchisee/client.invoices.header.html'
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
							templateUrl: 'franchisee/client.tasks.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.tasks.html'
						}
					 }
				})
				
				.state('franchisee.clients.client.tasks.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.tasks.header.html'
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
							templateUrl: 'franchisee/client.historys.header.html'
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
				
				.state('franchisee.clients.client.request', {

					url: '/request',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.request.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/client.request.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests', {

					url: '/requests',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/requests.html'
						}
					 }
				})

				.state('franchisee.clients.requests.request', {

					url: '/request',
					views: {
						'header@': {
							templateUrl: 'franchisee/client.request.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/request.html'
						}
					 }
				})

// Client Forms

				.state('franchisee.clients.requests.request.request', {

					url: '/request',
					views: {
						'content@': {
							templateUrl: 'request/request.html'
						},
						'header@': {
							templateUrl: 'request/request.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.dirs', {

					url: '/directives',
					views: {
						'content@': {
							templateUrl: 'request/dirs.html'
						},
						'header@': {
							templateUrl: 'request/dirs.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.assess', {

					url: '/assessment',
					views: {
						'content@': {
							templateUrl: 'request/assess.html'
						},
						'header@': {
							templateUrl: 'request/assess.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.eval', {

					url: '/evaluation',
					views: {
						'content@': {
							templateUrl: 'request/eval.html'
						},
						'header@': {
							templateUrl: 'request/eval.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.agreement', {

					url: '/agreement',
					views: {
						'content@': {
							templateUrl: 'request/agreement.html'
						},
						'header@': {
							templateUrl: 'request/agreement.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.rights', {

					url: '/rights',
					views: {
						'content@': {
							templateUrl: 'request/rights.html'
						},
						'header@': {
							templateUrl: 'request/rights.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.title42', {

					url: '/title42',
					views: {
						'content@': {
							templateUrl: 'request/title42.html'
						},
						'header@': {
							templateUrl: 'request/title42.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.psda', {

					url: '/psda',
					views: {
						'content@': {
							templateUrl: 'request/psda.html'
						},
						'header@': {
							templateUrl: 'request/psda.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.npsda', {

					url: '/npsda',
					views: {
						'content@': {
							templateUrl: 'request/npsda.html'
						},
						'header@': {
							templateUrl: 'request/npsda.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.ndirs', {

					url: '/ndirs',
					views: {
						'content@': {
							templateUrl: 'request/ndirs.html'
						},
						'header@': {
							templateUrl: 'request/ndirs.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.urights', {

					url: '/urights',
					views: {
						'content@': {
							templateUrl: 'request/urights.html'
						},
						'header@': {
							templateUrl: 'request/urights.header.html'
						}
					 }
				})
				
				.state('franchisee.clients.requests.request.selecter', {

					url: '/selecter',
					views: {
						'header@': {
							templateUrl: 'request/selecter.header.html'
						},
						'content@': {
							templateUrl: 'request/selecter.html'
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
				
				.state('franchisee.caregivers.caregivers', {
					url: '/caregivers',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/caregivers.caregivers.html'
						}
					 }
				})
				
				.state('franchisee.caregivers.caregiver', {
					url: '/caregiver',
					views: {
						'header@': {
							templateUrl: 'franchisee/caregiver.header.html'
						},
						'content@': {
							templateUrl: 'franchisee/caregiver.html'
						}
					 }
				})
				
				.state('franchisee.caregivers.applicants', {
					url: '/applicants',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/applicants.html'
						}
					 }
				})
				
				.state('franchisee.caregivers.applicants.applicant', {

					url: '/applicant',
					views: {
						'header@': {
							templateUrl: 'franchisee/applicant.header.html'
						},
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
				
				.state('franchisee.admin.info', {
					url: '/info',
					views: {
						'content@': {
							templateUrl: 'franchisee/info.html'
						},
						'header@': {
							templateUrl: 'franchisee/info.header.html'
						}
					 }
				})
				
				.state('franchisee.admin.info.edit', {
					url: '/edit',
					views: {
						'content@': {
							templateUrl: 'franchisee/info.edit.html'
						},
						'header@': {
							templateUrl: 'franchisee/info.edit.header.html'
						}
					 }
				})
				
				.state('franchisee.admin.forms', {
					url: '/forms',
					views: {
						'content@': {
							templateUrl: 'franchisee/forms.html'
						},
						'header@': {
							templateUrl: 'franchisee/forms.header.html'
						}
					 }
				})
				
				.state('franchisee.admin.geo', {
					url: '/geography',
					views: {
						'content@': {
							templateUrl: 'franchisee/geo.html'
						},
						'header@': {
							templateUrl: 'franchisee/geo.header.html'
						}
					 }
				})
				
				.state('franchisee.admin.accounting', {
					url: '/accounting',
					views: {
						'content@': {
							templateUrl: 'franchisee/accounting.html'
						},
						'header@': {
							templateUrl: 'franchisee/accounting.header.html'
						}
					 }
				})

// start caregiver

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
							templateUrl: 'caregiver/profile.header.html'
						}
					 }
				})
				
				.state('caregiver.profile.info', {

					url: '/information',
					views: {
						'content@': {
							templateUrl: 'caregiver/info.html'
						},
						'header@': {
							templateUrl: 'caregiver/info.header.html'
						}
					 }
				})
				
				.state('caregiver.profile.info.edit', {

					url: '/edit',
					views: {
						'header@': {
							templateUrl: 'caregiver/info.edit.header.html'
						},
						'content@': {
							templateUrl: 'caregiver/info.edit.html'
						}
					 }
				})
				
				
				.state('caregiver.profile.password', {

					url: '/password',
					views: {
						'content@': {
							templateUrl: 'caregiver/password.html'
						},
						'header@': {
							templateUrl: 'caregiver/password.header.html'
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
				
				.state('caregiver.schedule.covers', {

					url: '/covers',
					views: {
						'content@': {
							templateUrl: 'caregiver/covers.html'
						},
						'header@': {
							templateUrl: 'caregiver/covers.header.html'
						}
					 }
				})
				
				.state('caregiver.skills', {

					url: '/skills',
					views: {
						'content@': {
							templateUrl: 'caregiver/skills.html'
						},
						'header@': {
							templateUrl: 'caregiver/skills.header.html'
						}
					 }
				})
				
				.state('caregiver.skills.skill', {

					url: '/skill',
					views: {
						'content@': {
							templateUrl: 'caregiver/skill.html'
						},
						'header@': {
							templateUrl: 'caregiver/skill.header.html'
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
							templateUrl: 'caregiver/client.header.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.info', {

					url: '/info',
					views: {
						'tab-content': {
							templateUrl: 'franchisee/client.info.html'
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
				
				.state('caregiver.clients.client.tasks.task', {

					url: '/task',
					views: {
						'content@': {
							templateUrl: 'caregiver/client.task.html'
						},
						'header@': {
							templateUrl: 'caregiver/task.header.html'
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
							templateUrl: 'caregiver/notes.html'
						}
					 }
				})
				
				.state('caregiver.clients.client.notes.note', {

					url: '/note',
					views: {
						'content@': {
							templateUrl: 'caregiver/note.html'
						},
						'header@': {
							templateUrl: 'caregiver/note.header.html'
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

// Applicant Forms
				
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
							templateUrl: 'applicant/contract.header.html'
						}
					 }
				})
				
				.state('applicant.reqs', {

					url: '/reqs',
					views: {
						'content@': {
							templateUrl: 'applicant/reqs.html'
						},
						'header@': {
							templateUrl: 'applicant/reqs.header.html'
						}
					 }
				})
				
				.state('applicant.health', {

					url: '/health',
					views: {
						'content@': {
							templateUrl: 'applicant/health.html'
						},
						'header@': {
							templateUrl: 'applicant/health.header.html'
						}
					 }
				})
				
				.state('applicant.dda', {

					url: '/dda',
					views: {
						'content@': {
							templateUrl: 'applicant/dda.html'
						},
						'header@': {
							templateUrl: 'applicant/dda.header.html'
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
							templateUrl: 'applicant/w9.header.html'
						}
					 }
				})
				
				.state('applicant.i9', {

					url: '/i9',
					views: {
						'content@': {
							templateUrl: 'applicant/i9.html'
						},
						'header@': {
							templateUrl: 'applicant/i9.header.html'
						}
					 }
				})
				
				.state('applicant.w4', {

					url: '/w4',
					views: {
						'content@': {
							templateUrl: 'applicant/w4.html'
						},
						'header@': {
							templateUrl: 'applicant/w4.header.html'
						}
					 }
				})
				
				.state('applicant.udpa', {

					url: '/udpa',
					views: {
						'content@': {
							templateUrl: 'applicant/udpa.html'
						},
						'header@': {
							templateUrl: 'applicant/udpa.header.html'
						}
					 }
				})
				
				.state('applicant.bg', {

					url: '/bg',
					views: {
						'content@': {
							templateUrl: 'applicant/bg.html'
						},
						'header@': {
							templateUrl: 'applicant/bg.header.html'
						}
					 }
				})
				
				.state('applicant.photo', {

					url: '/photo',
					views: {
						'content@': {
							templateUrl: 'applicant/photo.html'
						},
						'header@': {
							templateUrl: 'applicant/photo.header.html'
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
							templateUrl: 'family/agreement.html'
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
							templateUrl: 'super/notifications.header.html'
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

				.state('super.franchisees.franchisee', {

					url: '/franchisee',
					views: {
						'content@': {
							templateUrl: 'super/franchisee.html'
						},
						'header@': {
							templateUrl: 'super/franchisee.header.html'
						}
					 }
				})
				
				.state('super.franchisees.franchisee.geos', {

					url: '/geography',
					views: {
						'content@': {
							templateUrl: 'super/geos.html'
						},
						'header@': {
							templateUrl: 'super/geos.header.html'
						}
					 }
				})
				
				.state('super.franchisees.franchisee.geos.add', {

					url: '/add',
					views: {
						'content@': {
							templateUrl: 'super/geo.add.html'
						},
						'header@': {
							templateUrl: 'super/account.header.html'
						}
					 }
				})
				
				.state('super.franchisees.franchisee.royalty', {

					url: '/royalty',
					views: {
						'content@': {
							templateUrl: 'super/royalty.html'
						},
						'header@': {
							templateUrl: 'super/royalty.header.html'
						}
					 }
				})
				
				.state('super.accounts', {

					url: '/accounts',
					views: {
						'content@': {
							templateUrl: 'super/accounts.html'
						},
						'header@': {
							templateUrl: 'super/accounts.header.html'
						}
					 }
				})
				
				.state('super.accounts.account', {

					url: '/account',
					views: {
						'content@': {
							templateUrl: 'franchisee/invoices.html'
						},
						'header@': {
							templateUrl: 'super/account.header.html'
						}
					 }
				})
				
				.state('super.forms', {

					url: '/forms',
					views: {
						'content@': {
							templateUrl: 'super/forms.html'
						},
						'header@': {
							templateUrl: 'super/forms.header.html'
						}
					 }
				})

// Caregiver Super Forms
				
				.state('super.forms.resume', {

					url: '/resume',
					views: {
						'content@': {
							templateUrl: 'applicant/resume.html'
						},
						'header@': {
							templateUrl: 'super/resume.header.html'
						}
					 }
				})
				
				.state('super.forms.resume.experiences', {

					url: '/experiences',
					views: {
						'content@': {
							templateUrl: 'super/experiences.html'
						},
						'header@': {
							templateUrl: 'super/experiences.header.html'
						}
					 }
				})
				
				.state('super.forms.ccontract', {

					url: '/ccontract',
					views: {
						'content@': {
							templateUrl: 'applicant/contract.html'
						},
						'header@': {
							templateUrl: 'super/ccontract.header.html'
						}
					 }
				})
				
				.state('super.forms.creqs', {

					url: '/creqs',
					views: {
						'content@': {
							templateUrl: 'applicant/reqs.html'
						},
						'header@': {
							templateUrl: 'super/creqs.header.html'
						}
					 }
				})
				
				.state('super.forms.chealth', {

					url: '/chealth',
					views: {
						'content@': {
							templateUrl: 'applicant/health.html'
						},
						'header@': {
							templateUrl: 'super/chealth.header.html'
						}
					 }
				})
				
				.state('super.forms.cdda', {

					url: '/cdda',
					views: {
						'content@': {
							templateUrl: 'applicant/dda.html'
						},
						'header@': {
							templateUrl: 'super/cdda.header.html'
						}
					 }
				})
				
				.state('super.forms.cw9', {

					url: '/cw9',
					views: {
						'content@': {
							templateUrl: 'applicant/w9.html'
						},
						'header@': {
							templateUrl: 'super/cw9.header.html'
						}
					 }
				})
				
				.state('super.forms.ci9', {

					url: '/ci9',
					views: {
						'content@': {
							templateUrl: 'applicant/i9.html'
						},
						'header@': {
							templateUrl: 'super/ci9.header.html'
						}
					 }
				})
				
				.state('super.forms.cw4', {

					url: '/cw4',
					views: {
						'content@': {
							templateUrl: 'applicant/w4.html'
						},
						'header@': {
							templateUrl: 'super/cw4.header.html'
						}
					 }
				})
				
				.state('super.forms.cudpa', {

					url: '/cudpa',
					views: {
						'content@': {
							templateUrl: 'applicant/udpa.html'
						},
						'header@': {
							templateUrl: 'super/cudpa.header.html'
						}
					 }
				})
				
				.state('super.forms.cbg', {

					url: '/cbg',
					views: {
						'content@': {
							templateUrl: 'applicant/bg.html'
						},
						'header@': {
							templateUrl: 'super/cbg.header.html'
						}
					 }
				})
				
				.state('super.forms.photo', {

					url: '/photo',
					views: {
						'content@': {
							templateUrl: 'applicant/photo.html'
						},
						'header@': {
							templateUrl: 'applicant/photo.header.html'
						}
					 }
				})

// Client Super Forms
				
				.state('super.forms.frequest', {

					url: '/frequest',
					views: {
						'content@': {
							templateUrl: 'request/request.html'
						},
						'header@': {
							templateUrl: 'super/frequest.header.html'
						}
					 }
				})
				.state('super.forms.fdirs', {

					url: '/fdirectives',
					views: {
						'content@': {
							templateUrl: 'request/dirs.html'
						},
						'header@': {
							templateUrl: 'super/fdirs.header.html'
						}
					 }
				})
				.state('super.forms.fassess', {

					url: '/fassessment',
					views: {
						'content@': {
							templateUrl: 'request/assess.html'
						},
						'header@': {
							templateUrl: 'super/fassess.header.html'
						}
					 }
				})
				.state('super.forms.feval', {

					url: '/fevaluations',
					views: {
						'content@': {
							templateUrl: 'request/eval.html'
						},
						'header@': {
							templateUrl: 'super/feval.header.html'
						}
					 }
				})
				.state('super.forms.fagreement', {

					url: '/fagreement',
					views: {
						'content@': {
							templateUrl: 'request/agreement.html'
						},
						'header@': {
							templateUrl: 'super/fagreement.header.html'
						}
					 }
				})
				.state('super.forms.frights', {

					url: '/frights',
					views: {
						'content@': {
							templateUrl: 'request/rights.html'
						},
						'header@': {
							templateUrl: 'super/frights.header.html'
						}
					 }
				})
				.state('super.forms.ftitle42', {

					url: '/ftitle42',
					views: {
						'content@': {
							templateUrl: 'request/title42.html'
						},
						'header@': {
							templateUrl: 'super/ftitle42.header.html'
						}
					 }
				})
				.state('super.forms.fpsda', {

					url: '/fpsda',
					views: {
						'content@': {
							templateUrl: 'request/psda.html'
						},
						'header@': {
							templateUrl: 'super/fpsda.header.html'
						}
					 }
				})
				.state('super.forms.fndirs', {

					url: '/fndirs',
					views: {
						'content@': {
							templateUrl: 'request/ndirs.html'
						},
						'header@': {
							templateUrl: 'super/fndirs.header.html'
						}
					 }
				})
				
				.state('super.forms.fnpsda', {

					url: '/fnpsda',
					views: {
						'content@': {
							templateUrl: 'request/npsda.html'
						},
						'header@': {
							templateUrl: 'super/fnpsda.header.html'
						}
					 }
				})
				
				.state('super.forms.furights', {

					url: '/furights',
					views: {
						'content@': {
							templateUrl: 'request/urights.html'
						},
						'header@': {
							templateUrl: 'super/furights.header.html'
						}
					 }
				})

		}
	]
);