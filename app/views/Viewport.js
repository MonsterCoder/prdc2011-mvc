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
		Ext.apply(prdc.views, {
			speakersView: new prdc.views.speaker.List(),
			speakerDetail: new prdc.views.speaker.Show(),
			sessionsView: new prdc.views.session.List(),
			sessionDetail: new prdc.views.session.Show()
		});
		
         var  speakersTab = {
                title: 'Speakers',  
                scroll: 'vertical',
                iconCls: 'user',
				layout: 'card',
				controller: prdc.controllers.SpeakerController,
				items: [ prdc.views.speakersView, prdc.views.speakerDetail]
         };
         
         var sessionsTab = {
                title: 'Sessions',
                iconCls: 'time',
    			scroll: 'vertical',
				controller: prdc.controllers.SessionController,
				items: [ prdc.views.sessionsView, prdc.views.sessionDetail]
            };
            
       var tweetsTab = {
                 title: 'Tweets',
                 iconCls: 'team',
                 hashtag: this.twitterSearch
            };

        Ext.apply(this, {
            items: [speakersTab, sessionsTab, tweetsTab]
        });
        prdc.views.Viewport.superclass.initComponent.apply(this, arguments);

    },
    layoutOrientation : function(orientation, w, h) {
        prdc.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});


