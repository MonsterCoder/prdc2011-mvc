Ext.regModel('Session', {
    fields: ['abstract', "id", "speakers","tags","title","speakerNames"]
});

sessionStore =  new Ext.data.JsonPStore({    
        model: 'Session',                  
        url: 'http://prdc.heroku.com/sessions.js',                   
        reader: {
            type: 'json',
            root: 'sessions'
        } ,            
        autoLoad: true 
    }); 

