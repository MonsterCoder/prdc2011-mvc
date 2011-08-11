prdc.views.Viewport = Ext.extend(Ext.TabPanel, {
    tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        Ext.apply(prdc.views, {
        		speakers: new prdc.views.Speakers()
        });
        
         var  speakersTab = {
                title: 'Speakers',  
                scroll: 'vertical',
                iconCls: 'user',
                xtype:'speakers'
               
         };
         
         var sessionsTab = {
                title: 'Sessions',
                iconCls: 'time',
    			scroll: 'vertical'
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


