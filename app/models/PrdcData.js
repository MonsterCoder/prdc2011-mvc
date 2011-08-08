Ext.regModel('Speaker', {
    fields: ['name']
});

speakerStore = new Ext.data.Store({
    model: 'Speaker',

    proxy: {
        type: 'ajax',
        url : 'http://localhost/Prdc-mvc/app/models/dummydata.js',
        reader: {
            type: 'json',
            root: 'speakers'
        }

    } 
});


