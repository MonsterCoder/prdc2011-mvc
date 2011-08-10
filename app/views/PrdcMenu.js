prdc.views.PrdcMenu = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'prdc2011'
    }],

    items: [{
        xtype: 'list',
        store: speakerStore,
        itemTpl : 'Name: {name}',
        scroll: 'vertical',
        fullscreen: true
    }],

    initComponent: function() {
        prdc.views.PrdcMenu.superclass.initComponent.apply(this, arguments);        
    }
});

Ext.reg('menu', prdc.views.PrdcMenu); 


