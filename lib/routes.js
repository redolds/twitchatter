// Oauth handling
if(Meteor.isClient){
	Accounts.onLogin(function(){
		 FlowRouter.go('dashboard');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

// enter triggers to redirect when needed
FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);


FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
})

FlowRouter.route('/dashboard', {
	name: 'dashboard',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardConversations'});
	}
})
