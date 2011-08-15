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
				detail = new prdc.views.session.Show({
					prevCard: this.listpanel,
					record: session
				});
				prdc.views.viewport.setActiveItem(detail, 'slide');
	}
});