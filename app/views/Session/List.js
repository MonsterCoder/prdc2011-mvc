
prdc.views.session.List = Ext.extend(Ext.Panel, {
    items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					title: 'sessions',		
					items: [{
								id: 'sessionlist_back',
								ui: 'back',
								text: 'Back',
								scope: this,
								handler: function(){
									prdc.views.viewport.setActiveItem(this.prevCard, {
										type: 'slide',
										reverse: true,
										scope: this
									});
								}
							}]
					}],
				items:	[{
				xtype: 'list',
				store: sessionStore,
				itemTpl : prdc.views.Templates.sessionItem,
				scroll: 'vertical',
				fullscreen: true,
				listeners: {
								selectionChange: function(lst, records) {
									if (records[0]) {
												Ext.dispatch({
													controller: prdc.controllers.SessionController,
													action: 'Show',
													selecteditem: records[0].data,
													tabcard: this.ownerCt
												});	
									}
								},
								scope: this
							}
					}]
			}],
    initComponent: function() {
        prdc.views.session.List.superclass.initComponent.apply(this, arguments);        
    }
	
});

 Ext.reg('sessions', prdc.views.session.List); 

