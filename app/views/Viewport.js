prdc.views.Viewport = Ext.extend(Ext.TabPanel, {
    tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                },
				listeners: {
					change:  function(tabbar, tab, tabcard) {
					      
						  Ext.dispatch({
												controller: tabcard.controller,
												action: 'Index',
												tabcard: tabcard
											});
					},
					scope:this
				}
            },
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
		Ext.apply(this, {
            items: this.buildTabs()
        });

        
        prdc.views.Viewport.superclass.initComponent.apply(this, arguments);

    },
    layoutOrientation : function(orientation, w, h) {
        prdc.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    },
	buildTabs: function() {         
		return [
					{
							id: 'homeTab',
							title:  "Home",  
							iconCls: 'home',
							layout: 'card',
							xtype: 'home'
					 },     
					{
							id: 'speakersTab',
							title: 'Speakers',  
							scroll: 'vertical',
							iconCls: 'user',
							layout: 'card',
							controller: prdc.controllers.SpeakerController
					 },     
					{
						id: 'sessionTab',
						title: 'Sessions',
						iconCls: 'time',
						scroll: 'vertical',
						layout: 'card',
						controller: prdc.controllers.SessionController
					},         
					{
						 id: 'tweetTab',
						 title: 'Tweets',
						 iconCls: 'team',
						 layout: 'card',
						 controller: prdc.controllers.TweetController
					}
					]
	}
});


