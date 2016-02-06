FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
})

FlowRouter.route('/dashboard', {
	name: 'dashboard',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Dashboard'});
	}
})
