Template.MainLayout.helpers({
	LoggedInUser: function(){
		return Meteor.user().profile.name;
	}
});
