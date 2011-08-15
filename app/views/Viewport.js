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
		
         this.speakersTab = {
                title: 'Speakers',  
                scroll: 'vertical',
                iconCls: 'user',
				layout: 'card',
				controller: prdc.controllers.SpeakerController,
				items: [ prdc.views.speakersView, prdc.views.speakerDetail]
         };
         
        this.sessionsTab = {
                title: 'Sessions',
                iconCls: 'time',
    			scroll: 'vertical',
				layout: 'card',
				controller: prdc.controllers.SessionController,
				items: [ prdc.views.sessionsView, prdc.views.sessionDetail]
            };
            
       this.tweetsTab = {
                 title: 'Tweets',
                 iconCls: 'team',
                 hashtag: this.twitterSearch
            };

        Ext.apply(this, {
            items: [this.speakersTab, this.sessionsTab, this.tweetsTab]
        });
        prdc.views.Viewport.superclass.initComponent.apply(this, arguments);

    },
    layoutOrientation : function(orientation, w, h) {
        prdc.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});


