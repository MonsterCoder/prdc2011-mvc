prdc.views.speaker.Show = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
	tpl: prdc.views.Templates.speakerDetail,
    initComponent: function(){
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
						ui: 'back',
						text: 'Back',
						scope: this,
						handler: function(){
							this.ownerCt.setActiveItem(this.prevCard, {
								type: 'slide',
								reverse: true,
								scope: this
							});
						}
					},
					{
							ui: 'sessions',
							text: 'Sessions',
							scope: this,
							handler: function(){
								            Ext.dispatch({
												controller: prdc.controllers.SessionController,
												action: 'Index',
												speakerId: this.record.id
											});
							}
					}]
        }];

 
        prdc.views.speaker.Show.superclass.initComponent.call(this);
    }
});

Ext.reg('speakerdetail', prdc.views.speaker.Show);