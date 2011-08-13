prdc.controllers.SessionController = new Ext.Controller ({
	Index: function(param){
		alert(param.speakerId);
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