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
		function render(best) {
			if (best.length == 1) {
				var tmp = _.template($("script#winner").html());
				var tex = tmp({"player":best[0].get("name"),"score":best[0].get("score")});
			} else if (best.length > 1) {
				var tmp = _.template($("script#winners").html());
				var names = [];
				for (var i = 0; i < best.length; i++) {
					names.push(best[i].get("name"));
				}
				var tex = tmp({"players":names.join(" and "),"score":best[0].get("score")});
			} 
			
            this.$el.html(tex);
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
