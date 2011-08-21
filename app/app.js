Ext.regApplication({
    name:"prdc",
    launch: function(){
        this.views.viewport= new this.views.Viewport();
    }
});

Ext.ns('prdc', 'prdc.views','prdc.views.session', 'prdc.views.speaker', 'prdc.views.tweet')