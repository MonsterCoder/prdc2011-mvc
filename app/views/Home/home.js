prdc.views.home = Ext.extend(Ext.Panel, {
	 cls:'hello', 
	 title:'welcome',
	 dockedItems: [{
					xtype: 'toolbar',
					title: 'PRDC2011'}]
});

 Ext.reg('home', prdc.views.home ); 

