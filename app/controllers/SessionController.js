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

		prdc.views.sessionList=  (prdc.views.sessionList || new prdc.views.session.List());
		
		var tab = Ext.getCmp('sessionTab');
		tab.setActiveItem(prdc.views.sessionList);

		Ext.getCmp('sessionlist_back').setVisible(showback);
	},
	
	Show: function(param) {
					if (param.selecteditem) {
					session = param.selecteditem;
					prdc.views.sessionDetail = (prdc.views.sessionDetail || new prdc.views.session.Show());
					Ext.apply(prdc.views.sessionDetail, {
						prevCard: this.listpanel,
						record: session
					});

					prdc.views.sessionDetail.update(session);
				}
				prdc.views.sessionList.ownerCt.setActiveItem(prdc.views.sessionDetail);
	}
});
