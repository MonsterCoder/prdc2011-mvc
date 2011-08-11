prdc.views.Speakers = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Speakers'
    }],

    items: [{
        xtype: 'list',
        store: speakerStore,
        itemTpl : prdc.views.Templates.speakerItem,
        scroll: 'vertical',
        fullscreen: true
    }],

    initComponent: function() {
        prdc.views.Speakers.superclass.initComponent.apply(this, arguments);        
    }
});

 Ext.reg('speakers', prdc.views.Speakers); 

