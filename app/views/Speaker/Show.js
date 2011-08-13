prdc.views.speaker.Show = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    initComponent: function(){
        this.dockedItems = [{
            xtype: 'toolbar',
            title: this.record.name,
            items: [{
						ui: 'back',
						text: 'Back',
						scope: this,
						handler: function(){
							this.ownerCt.setActiveItem(this.prevCard, {
								type: 'slide',
								reverse: true,
								scope: this,
								after: function(){
									this.destroy();
								}
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

        this.items = [{
            styleHtmlContent: true,
            tpl: prdc.views.Templates.speakerDetail,
            data: this.record
        }];

        prdc.views.speaker.Show.superclass.initComponent.call(this);
    }
});

Ext.reg('speakerdetail', prdc.views.speaker.Show);