Ext.regModel('Speaker', {
    fields: ['bio', "blog", "email","id","location","name","picture","twitter","website"]
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

