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
		function render(question) {
			this.curr = question;
			var tmp = _.template($("script#question-display").html());
			this.$el.html(tmp({"question":question}));
		};
		/**
		 * Returns current question
		 * @return current question
		 */
		function currentfn() {
			return this.curr;
		}
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
