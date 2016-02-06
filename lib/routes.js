// Oauth handling
if(Meteor.isClient){
	Accounts.onLogin(function(){
		 FlowRouter.go('overview');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
};

// enter triggers to redirect when needed
FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

// Home Route

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

// Dashboard routes

FlowRouter.route('/dashboard', {
	name: 'overview',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardOverview'});
	}
});

FlowRouter.route('/dashboard/conversations', {
	name: 'conversations',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardConversations'});
	}
});

FlowRouter.route('/dashboard/followers', {
	name: 'followers',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardFollowers'});
	}
});

FlowRouter.route('/dashboard/mentions', {
	name: 'mentions',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardMentions'});
	}
});

FlowRouter.route('/dashboard/non-followers', {
	name: 'non-followers',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardNonFollowers'});
	}
});

FlowRouter.route('/dashboard/analytics', {
	name: 'analytics',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardAnalytics'});
	}
});

FlowRouter.route('/dashboard/search', {
	name: 'search',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DashboardSearch'});
	}
});
