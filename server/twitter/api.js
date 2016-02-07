Meteor.startup(function(){
	var Twit = Meteor.npmRequire('twit');

	var T = new Twit({
		consumer_key: Meteor.settings.private.twitter.consumer_key, // API key
		consumer_secret: Meteor.settings.private.twitter.consumer_secret, // API secret
		access_token: Meteor.settings.private.twitter.access_token,
		access_token_secret:  Meteor.settings.private.twitter.access_token_secret
	});
});
