prdc.views.Speakers = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Speakers'
    }],

    items: [{
        xtype: 'list',
        store: speakerStore,
        itemTpl : '<span>{name}</span> <p>{bio}</p>',
        scroll: 'vertical',
        fullscreen: true
    }],

    initComponent: function() {
        prdc.views.Speakers.superclass.initComponent.apply(this, arguments);        
    }
});

