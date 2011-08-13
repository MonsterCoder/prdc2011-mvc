prdc.views.session.Show = Ext.extend(Ext.Panel, {
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
			}]
		}];

        this.items = [{
            styleHtmlContent: true,
            tpl: prdc.views.Templates.sessionDetail,
            data: this.record
        }];

        prdc.views.session.Show.superclass.initComponent.call(this);
    }
});