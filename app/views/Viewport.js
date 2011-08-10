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
                xtype: 'speakers'
            };

 
        Ext.apply(this, {
            items: [speakersTab]
        });
        
        prdc.views.Viewport.superclass.initComponent.apply(this, arguments);

    },
    layoutOrientation : function(orientation, w, h) {
        prdc.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});


