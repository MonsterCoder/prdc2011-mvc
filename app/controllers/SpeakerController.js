prdc.controllers.SpeakerController = new Ext.Controller({
			Show: function(param) {
				speaker = param.selecteditem.data;
				detail = new prdc.views.speaker.Show({
					prevCard: this.listpanel,
					record: speaker
				});
				prdc.views.viewport.setActiveItem(detail, 'slide');
			}
});