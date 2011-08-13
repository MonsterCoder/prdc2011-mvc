
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
                controller: prdc.controllers.SssionController,
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

