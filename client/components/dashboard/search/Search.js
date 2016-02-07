Template.DashboardSearch.events({
	"click #btnSearchTweets": function(event, template){
		event.preventDefault();
		var term = $('#searchTerm').val();

		Meteor.call('searchTweets', term, function(err, result) {
			if (err) {
				console.log(err);
			}
			if (result) {
				Session.set('tweetData', result);
			}
		});
		$('#searchTerm').val("");
	}
});

Template.DashboardSearch.helpers({
	tweetData: function(){
		return Session.get('tweetData');
	}
});
