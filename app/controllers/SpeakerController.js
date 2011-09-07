prdc.controllers.SpeakerController = new Ext.Controller({
			Index: function(param) {		
				prdc.views.speakersList = (prdc.views.speakersList || new prdc.views.speaker.List());
				prdc.views.speakersList.doLayout();
				var tab = Ext.getCmp('speakersTab');
		        tab.setActiveItem(prdc.views.speakersList);
				tab.doLayout();
		        prdc.views.viewport.setActiveItem(tab);
				prdc.views.viewport.doLayout();
			},
			
			Show: function(param) {
				if (param.selecteditem) {
					speaker = param.selecteditem;
					prdc.views.speakerDetail = (prdc.views.speakDetail || new prdc.views.speaker.Show());
					Ext.apply(prdc.views.speakerDetail, {
						prevCard: this.listpanel,
						record: speaker
					});

					prdc.views.speakerDetail.update(speaker);
				}
				prdc.views.speakersList.ownerCt.setActiveItem(prdc.views.speakerDetail);
			}
});
