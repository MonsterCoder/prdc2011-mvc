prdc.views.home = Ext.extend(Ext.Panel, {
	// html: "<iframe frameborder='0' src='http://prdc.herokuapp.com/' width='100%' height='100%' id='iframe-external'></iframe>",
	html: '<div class="landing_page" style="background-image: url(lib/resource/landing.jpg)"></div>'
});

 Ext.reg('home', prdc.views.home ); 

