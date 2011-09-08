prdc.views.about = Ext.extend(Ext.Panel, {
	 html: "<iframe frameborder='0' src='app/views/About/about.html' width='100%' height='100%' id='iframe-external'></iframe>",
});

 Ext.reg('about', prdc.views.about ); 

