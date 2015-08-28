/**
 * A collection representing many questions.
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration",
        "js/model/Player"],
    function($,_,Backbone,Config,Player) {
		/**
		 * Adds the score to the current player
		 * @param score - score to add
		 */
		function addScore(score) {
			this.at(this.current).addScore(score);
		}
		/**
		 * Init function
		 */
		function init() {
			this.current = 0;
		}
		/**
		 * Increment the current pointer
		 */
		function next() {
			this.current = (1 + this.current) % this.length;
		}
		/**
		 * Is this model selected
		 * @param model - model to test
		 */
		function isCurrent(model) {
			return this.indexOf(model) == this.current;
		}
		/**
		 * Get player with most score
		 */
		function best() {
			var players = [];
			this.forEach(function(model) {
				if (players.length == 0 || model.get("score") > players[0].get("score"))
					players = [model];
				else if (model.get("score") == players[0].get("score"))
					players.push(model);
			});
			return players;
		}
        /**
         * Model of a question
         */
        return Backbone.Collection.extend({
        		"url":"",
            	"model":Player,
            	"addScore":addScore,
            	"initialize":init,
            	"isCurrent":isCurrent,
            	"next":next,
            	"best":best
            });
    }
);