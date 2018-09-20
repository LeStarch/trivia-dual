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
						var finals = [];
						for (var i = 0; i < data.length; i++) {
							if (isNaN(+data[i]["answer"])) {
								data[i]["answer"] = Math.max(0, data[i]["answers"].indexOf(data[i]["answer"]));
                                                       		
                                                	}
						}
                                                data.sort(function (a,b) {
                                                    if (a["points"] < b["points"]) {
                                                        return -1;
                                                    } else if (a["points"] > b["points"]) {
                                                        return 1;
                                                    }
                                                    return 0;
                                                });
	    				    	_self.add(data);
	    			     	},
	    			error: function(dumby,type,message) {
	    						console.log(type+": "+message);
	    		    		},
	    			});
		}
		/**
		 * Are all the questions answered
		 */
		function finished() {
			var answered = true;
			this.forEach(function(model) {
				var tmp = typeof(model.get("answered")) != "undefined";
				answered = answered && tmp;
			});
			return answered;
		}
        /**
         * Model of a question
         */
        return Backbone.Collection.extend({
        		"url":"",
            	"model":Question,
            	"load":load,
            	"finished":finished
            });
    }
);
