prdc.views.prdcMenu = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'prdc'
    }],

    items: [{
        xtype: 'list',
        store: speakerStore,
        itemTpl : 'Name:{name}',
        scroll: 'vertical',
        fullscreen: true
    }],

    initComponent: function() {

        prdc.views.prdcMenu.superclass.initComponent.apply(this, arguments);        
    }
});


