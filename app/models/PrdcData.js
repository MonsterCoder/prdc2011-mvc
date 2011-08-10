Ext.regModel('Speaker', {
    fields: ['name']
});

speakerStore =  new Ext.data.JsonPStore({    
        model: 'Speaker',                  
        url: 'http://prdc.heroku.com/speakers.js',                   
        reader: {
            type: 'json',
            root: 'speakers'
        } ,            
        autoLoad: true 
    }); 

