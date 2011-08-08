prdc.query = [
	{ q: 'select * from rss where url="http://earthquake.prdc.gov/earthquakes/catalogs/shakerss.xml"' },
	{ q: 'select * from rss where url="http://earthquake.prdc.gov/earthquakes/catalogs/eqs7day-M2.5.xml"' },
	{ q: 'select * from rss where url="http://earthquake.prdc.gov/earthquakes/catalogs/eqs7day-M5.xml"'}
];

prdc.menu = [
	{id: 0, title: 'Earthquake ShakeMaps'},
	{id: 1, title: 'M 2.5+ earthquakes'},
	{id: 2, title: 'M 5+ earthquakes'}
];

Ext.regModel('prdc.models.prdcMenu', {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"}
    ]
});

prdc.stores.prdcMenu = new Ext.data.Store({
    model: 'prdc.models.prdcMenu',
    data: prdc.menu
});
            
Ext.regModel("prdc.models.prdcData", {
    fields: [
        {name: 'id', 						type: 'int'},
        {name: 'title', 				type: 'string'},
        {name: 'description', 	type: 'string'},
        {name: 'link', 					type: 'string'},
        {name: 'pubDate', 			type: 'date'},
        {name: 'lat', 					type: 'string'},
        {name: 'long', 					type: 'string'}
//        {name: 'subject', 			type: 'string'},
//        {name: 'seconds', 			type: 'string'},
//        {name: 'depth', 				type: 'string'},
//        {name: 'region', 				type: 'string'}
    ]
});

prdc.stores.prdcData = new Ext.data.Store({
    model: 'prdc.models.prdcData',
    proxy: {
    	type: 'scripttag',
    	url: 'http://query.yahooapis.com/v1/public/yql',
    	extraParams: {
    		format: 'json'
    	},
	  	reader: {
	  		root: 'query.results.item'
	  	}
  	}
});



