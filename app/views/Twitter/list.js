prdc.views.tweet.List = Ext.extend(Ext.Panel, {
    items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					title: 'Tweets'
				}],
				items:	[{
							xtype: 'list',
							itemTpl : new Ext.XTemplate(
											'<div id="tweet_container">',
												'<tpl for=".">',
													'<div class="tweet_data">',
													'<div class="tweet_avatar">',
														'<img width="30" height="30" src="{profile_image_url}"/>',
													'</div>',
													'<div class="tweet_content">',
														'<a class="user" href="http://twitter.com/{from_user}">{from_user}</a>&nbsp;',
														'{text}',
													'</div>',
													'<div class="clear"></div>',
													'</div>',
												'</tpl>',
											'</div>'
											),
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