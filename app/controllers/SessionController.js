prdc.controllers.SessionController = new Ext.Controller ({
	Index: function(param){
		sessionStore.clearFilter();
		if (param.filter){
				for(var field in param.filter){
					sessionStore.filter(field,param.filter[field],true);
				}			
		}
		prdc.views.viewport.setActiveItem(1);
	},
	
	Show: function(param) {
				session = param.selecteditem.data;
				Ext.apply(prdc.views.sessionDetail, {
					prevCard: this.listpanel,
					record: session
				});

				prdc.views.sessionDetail.update(session);
				
				prdc.views.viewport.getActiveItem().setActiveItem(1);
	}
});