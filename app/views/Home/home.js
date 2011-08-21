prdc.views.home = Ext.extend(Ext.Panel, {
	html: "<iframe frameborder='0' src='http://prdc.herokuapp.com/' width='100%' height='100%' id='iframe-external'></iframe>",
});

 Ext.reg('home', prdc.views.home ); 

