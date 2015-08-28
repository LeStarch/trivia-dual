/**
 * A view which paints a question
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration"],
    function($,_,Backbone,Config) {
		/**
		 * Inits the view
		 */
		function init() {};
		/**
		 * Renders this view
		 */
		function render(players) { 
			var lst = _.template($("script#show-players").html());
			var add = _.template($("script#add-player").html());
            this.$el.html(lst({"players":players})+add());
		};
        /**
         * Model of a question
         */
        return Backbone.View.extend({
            "init":init,
            "render":render,
            "events": {}
        });
    }
);
