/**
 * A view which paints the list of questions
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration"],
    function($,_,Backbone,Config) {
		/**
		 * Returns function that runs for-each
		 * @param collections - collections map
		 */
		function each(collections) {
			/**
			 * Organize the models in the given collection (for each)
			 * @param model - model submitted for each
			 */
			function organize(model) {
				//Needed model values
				var collect = model.get("collection");
				var points = model.get("points");
				//Add in collections
				if (!(collect in collections)) {
					collections[collect] = [];
				}
				collections[collect].push(model);
			};
		};
		/**
		 * Inits the view
		 */
		function init() {};
		/**
		 * Renders this view
		 */
		function render(collection) {
			var collections = {}
			collection.each(each(collections));
			
			var tmp = _.template($("script#question-display").html());
            this.$el.html(tmp({"collections":collections}));
		};
		
        /**
         * Model of a question
         */
        return Backbone.View.extend({
            "init":init,
            "render":render
        });
    }
);
