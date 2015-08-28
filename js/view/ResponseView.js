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
		function render(question,guess,right) {
			var tmp = null;
			if (right)
				tmp = _.template($("script#right").html());
			else
				tmp = _.template($("script#wrong").html());
            this.$el.html(tmp({"question":question,"guess":guess}));
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
