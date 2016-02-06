var Twit = Meteor.npmRequire('twit');

var T = new Twit({
	consumer_key: Meteor.settings.private.consumer_key, // API key
	consumer_secret: Meteor.settings.private.consumer_secret, // API secret
	access_token: Meteor.settings.private.access_token,
	access_token_secret:  Meteor.setting.private.access_token_secret
});
