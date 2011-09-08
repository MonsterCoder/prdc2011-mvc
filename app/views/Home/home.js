prdc.views.home = Ext.extend(Ext.Panel, {
	 html: "<iframe frameborder='0' src=lib/static_pages/countdown.html width='100%' height='100%' id='iframe-external'></iframe>",
	 dockedItems: [{
					xtype: 'toolbar',
					title: 'PRDC2011'}]
});

 Ext.reg('home', prdc.views.home ); 

