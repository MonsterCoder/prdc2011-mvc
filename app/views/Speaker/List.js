prdc.views.speaker.List = Ext.extend(Ext.Panel, {
    items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					title: 'Speakers'
				}],
				items:	[{
							xtype: 'list',
							store: speakerStore,
							itemTpl : prdc.views.Templates.speakerItem,
							scroll: 'vertical',
							fullscreen: true,
							listeners: {
								selectionChange: function(lst, records) {
									if (records[0]) {
												Ext.dispatch({
													controller: prdc.controllers.SpeakerController,
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
        prdc.views.speaker.List.superclass.initComponent.apply(this, arguments);        
    }
});

 Ext.reg('speakers', prdc.views.speaker.List); 

