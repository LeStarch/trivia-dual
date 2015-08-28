/**
 * A model representing a player.
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration"],
    function($,_,Backbone,Config) {
		/**
		 * Adds to this players score
		 * @param score - score to add
		 */
		function addScore(score) {
			this.set("score",this.get("score")+score);
		}
        /**
         * Model of a question
         */
        return Backbone.Model.extend({
            "defaults":
            	{
            		"current":false,
            		"score":0,
            		"name":"Anonymous"
            	},
            	"addScore":addScore
            });
    }
);