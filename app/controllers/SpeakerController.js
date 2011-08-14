prdc.controllers.SpeakerController = new Ext.Controller({
			Index: function(param) {		
				param.tabcard.setActiveItem(0);
			},
			Show: function(param) {
				speaker = param.selecteditem.data;
				detail = new prdc.views.speaker.Show({
					prevCard: this.listpanel,
					record: speaker
				});
				
				prdc.views.viewport.getTabBar().activeTab.setCard(detail, 'slide');
			}
});