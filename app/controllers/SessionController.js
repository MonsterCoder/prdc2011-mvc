prdc.controllers.SessionController = new Ext.Controller ({
	Index: function(param){
		// var speakerid = param.speakerId;
	    // var d = new	prdc.views.session.List({filter:{'speakers':/\b49\b/}});
		// d.filter ={'speaker':new RegExp('/\b'+speakerid+'\b/')};
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