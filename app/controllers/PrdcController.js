prdc.controllers.prdcController = new Ext.Controller({

		index: function(options) {
        prdc.views.viewport.setActiveItem(
            prdc.views.prdcMenu, options.animation
        );
    },

    showMap: function(options) {
        var data = options.data;
    		prdc.views.prdcMap.addMap(data);
        prdc.views.viewport.setActiveItem(
            prdc.views.prdcMap, options.animation
        );
    },
    
    showprdcList: function(options) {
        var id = parseInt(options.id);
    		prdc.stores.prdcData.getProxy().extraParams.q = prdc.query[id].q;
    		prdc.stores.prdcData.read();
        prdc.views.viewport.setActiveItem(
            prdc.views.prdcList, options.animation
        );
    },
    
		backToIndex: function(options) {
        prdc.views.viewport.setActiveItem(
            prdc.views.prdcMenu, options.animation
        );
    },

    backToprdcList: function(options) {
        prdc.views.viewport.setActiveItem(
            prdc.views.prdcList, options.animation
        );
    }    
});



