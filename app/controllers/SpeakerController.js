prdc.controllers.SpeakerController = new Ext.Controller({
			Index: function(param) {		
				param.tabcard.setActiveItem(0);
			},
			
			Show: function(param) {
				speaker = param.selecteditem.data;
				prdc.views.speakerDetail.prevCard = this.listpanel;
				prdc.views.speakerDetail.update(speaker);
				
				param.tabcard.setActiveItem(1);
			}
});