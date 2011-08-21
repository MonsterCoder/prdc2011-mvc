prdc.views.tweet.List = Ext.extend(Ext.Panel, {
    items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					title: 'Tweets'
				}],
				items:	[{
							xtype: 'list',
							itemTpl : '<tpl if="profile_image_url"> <img class="avata_img" src="{profile_image_url}"/> </tpl><div class="tweet"> <h3>{from_user}<tpl if="to_user"> &raquo; {to_user}</tpl></h3> <p>{text}</p> </div> ',
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