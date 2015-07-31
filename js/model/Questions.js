/**
 * A collection representing many questions.
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration",
        "js/model/Question"],
    function($,_,Backbone,Config,Question) {
	

		/**
		 * Loads a url into the collection
		 * @param url - url to load
		 */
		function load(url) {
			var _self = this;
	        $.ajax({
	    			url:url,
	    			async: false,
	    			dataType:"json",
	    			success:function(data) {
	    				    	_self.add(data);
	    			     	},
	    			error: function(dumby,type,message) {
	    						console.log(type+": "+message);
	    		    		},
	    			});
		}
        /**
         * Model of a question
         */
        return Backbone.Collection.extend({
        		"url":"",
            	"model":Question,
            	"load":load
            });
    }
);