prdc.controllers.TweetController = new Ext.Controller({
			Index: function(param) {		
				prdc.views.tweetList = (prdc.views.tweetList || new prdc.views.tweet.List());
				param.tabcard.setActiveItem(prdc.views.tweetList);
			}
});