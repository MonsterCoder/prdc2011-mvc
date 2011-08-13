
prdc.views.session.List = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Sessions'
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

		sessionStore.clearFilter();
		if (this.filter){
						    for(var field in this.filter){
							sessionStore.filter(field,this.filter[field],true);
							}
							
		}
		
        prdc.views.session.List.superclass.initComponent.apply(this, arguments);        
    }
});

 Ext.reg('sessions', prdc.views.session.List); 

