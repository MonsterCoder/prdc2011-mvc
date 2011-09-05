prdc.views.Templates = {};


/*speakerTpl = new Ext.XTemplate(
	'<table>',
	'<img src="http://prairiedevcon.com/Content/imgs/speakers/{picture}" alt="{picture}" style="width:60px;height:60px;" />',
	' <div><h3>{name}, {location}</h3><h4>{company}</h4></div>',
	'</table>'
);*/

speakerListTpl = Ext.XTemplate.from('speakerListTpl');
speakerDetailTpl = Ext.XTemplate.from('speakerDetailTpl');
sessionItemTpl = Ext.XTemplate.from('sessionItemTpl');
sessionDetailTpl = Ext.XTemplate.from('sessionDetailTpl');
	


Ext.apply(prdc.views.Templates, {
				speakerItem: speakerListTpl ,
				speakerDetail: speakerDetailTpl,  	
				sessionItem: sessionItemTpl,
				sessionDetail: sessionDetailTpl
});



