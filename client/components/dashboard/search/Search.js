Template.DashboardSearch.events({
	"keyup input#searchTerm": function(event, template){
		if(event.which === 13) {
			Session.set('loadingTweets', true)
			event.preventDefault();
			var term = template.find('#searchTerm').value;

			Meteor.call('searchTweets', term, function(err, result) {
				if (err) {
					console.log(err);
				}
				if (result) {
					Session.set('tweetData', result);
					Session.set('loadingTweets', false)
				}
			});
			template.find('#searchTerm').value = "";
		}
	}
});

Template.DashboardSearch.helpers({
	tweetData: function(){
		return Session.get('tweetData');
	},
	isLoading: function(){
		if (Session.get('loadingTweets') === true) {
			return 'loading';
		} else {
			return '';
		}
	}
});
