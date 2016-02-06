Meteor.methods({
	searchTweets:function(term){
		T.get('search/tweets', { q: term, count: 10 }, function(err, data, response) {
			console.log(data);
		})
	}
});
