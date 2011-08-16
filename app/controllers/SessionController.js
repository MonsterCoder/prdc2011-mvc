prdc.controllers.SessionController = new Ext.Controller ({
	Index: function(param){
		sessionStore.clearFilter();
		var showback = false;
		if (param.filter){
				for(var field in param.filter){
					sessionStore.filter(field,param.filter[field],true);
				}			
				showback = true;
		}
		prdc.views.viewport.setActiveItem(1);
		
		//hide back button
		prdc.views.viewport.getActiveItem().getActiveItem().getDockedItems()[0].items.first().setVisible(showback);
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