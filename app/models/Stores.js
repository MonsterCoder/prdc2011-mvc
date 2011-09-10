sessionStore =  new Ext.data.JsonPStore({    
        model: 'Session',                  
        url: 'http://prdc.heroku.com/sessions.js',                   
        reader: {
            type: 'json',
            root: 'sessions'
        } ,            
        autoLoad: true 
    }); 

speakerStore =  new Ext.data.JsonPStore({    
        model: 'Speaker',                  
        url: 'http://prdc.heroku.com/speakers.js',                   
        reader: {
            type: 'json',
            root: 'speakers'
        } ,   
		sorters:'last_name',
		getGroupString: function(r){
			return r.get('last_name')[0]
		},
        autoLoad: true 
 }); 
 
 Ext.regModel('Tweet', {
    fields: ['id', 'text', 'to_user_id', 'from_user', 'created_at', 'profile_image_url']
});     

tweetStore = new Ext.data.JsonPStore({    
        model: 'Tweet',                  
        url: 'http://search.twitter.com/search.json?q=PrairieDevCon',                   
        reader: {
            type: 'json',
            root: 'results'
        } ,            
        autoLoad: true 
 }); 
