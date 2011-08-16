
prdc.views.session.List = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: "Sessions",
		items: [{
						ui: 'back',
						text: 'Back',
						scope: this,
						handler: function(){
							Ext.dispatch({
								controller: prdc.controllers.SpeakerController,
								action: 'Show',
								tabcard: prdc.views.speakersView.ownerCt
							});	
						}
			}]
    }],

    items: [{
				xtype: 'list',
				store: sessionStore,
				itemTpl : prdc.views.Templates.sessionItem,
				scroll: 'vertical',
				onItemDisclosure: function (item) {
					Ext.dispatch({
						controller: prdc.controllers.SessionController,
						action: 'Show',
						selecteditem: item
					});
        },

        fullscreen: true
    }],

    initComponent: function() {
        prdc.views.session.List.superclass.initComponent.apply(this, arguments);        
    }
	
});

 Ext.reg('sessions', prdc.views.session.List); 

