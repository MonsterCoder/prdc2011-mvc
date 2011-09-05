prdc.views.tweet.List = Ext.extend(Ext.Panel, {
    items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					title: 'Tweets'
				}],
				items:	[{
							xtype: 'list',
							itemTpl : prdc.views.Templates.tweet,
							scroll: 'vertical',
							store:tweetStore,
							fullscreen: true
					}]
			}],
    initComponent: function() {
        prdc.views.tweet.List.superclass.initComponent.apply(this, arguments);        
    }
});


Ext.reg('tweetList', prdc.views.tweet.List);