prdc.views.session.Show = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
	tpl: prdc.views.Templates.sessionDetail,
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
			}]
		}];

        prdc.views.session.Show.superclass.initComponent.call(this);
    }
});

Ext.reg('sessondetail', prdc.views.session.Show);