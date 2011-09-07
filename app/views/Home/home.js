prdc.views.home = Ext.extend(Ext.Panel, {
	// html: "<iframe frameborder='0' src='http://prdc.herokuapp.com/' width='100%' height='100%' id='iframe-external'></iframe>",
	html: ' I see you!<div class="landing_page" style="background-image: url(http://prdc.herokuapp.com/assets/speakers/amirbarylko.jpg)"></div>'
});

 Ext.reg('home', prdc.views.home ); 

