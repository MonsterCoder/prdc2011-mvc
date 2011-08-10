prdc.views.Viewport = Ext.extend(Ext.Panel, {
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
  
        Ext.apply(this, {
            items: [prdc.views.speakers]
        });
        
        prdc.views.Viewport.superclass.initComponent.apply(this, arguments);

    },
    layoutOrientation : function(orientation, w, h) {
        prdc.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});


