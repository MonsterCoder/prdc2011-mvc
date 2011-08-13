prdc.views.speaker.List = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Speakers'
    }],

    items: [{
        xtype: 'list',
        store: speakerStore,
        itemTpl : prdc.views.Templates.speakerItem,
        scroll: 'vertical',
		onItemDisclosure: function (item) {
            Ext.dispatch({
                controller: prdc.controllers.SpeakerController,
                action: 'Show',
				selecteditem: item
            });
        },

        fullscreen: true
    }],

    initComponent: function() {
        prdc.views.speaker.List.superclass.initComponent.apply(this, arguments);        
    }
});

 Ext.reg('speakers', prdc.views.speaker.List); 

