Template.DashboardSearch.events({
	"click #btnSearchTweets": function(event, template){
		 event.stopPropagation();
		 event.preventDefault();
		 console.log(event);
	}
});
