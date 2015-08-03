/**
 * A controller handling the list view.
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "js/config/Configuration"],
    function($,_,Config) {
        /**
         * A controller to run the list view
         */
        return function(lview,qview,collection) {
        		var _self = this;
        		_self.collection = collection;
        		_self.qview = qview;
        		/**
        		 * Handle the event
        		 * @param e - event to handle
        		 */
        		function listClick(e) {
        			var id = $(e.currentTarget).attr("id");
        			var model = _self.collection.get(id);
        			_self.qview.render(model);
        			_self.current = model;
        		}
        		lview.events["click .question"] = listClick;
        		lview.delegateEvents();
        		/**
        		 * Answer even handler
        		 * @param e - event
        		 */
        		function answerClick(e) {
        			var model = _self.current;
        			var ans = $(_self.qview.$el).find("input.answers:checked").val();
        			if (ans == ""+model.get("answer")) {
        				model.set("answered",true);
        			} else {
        				model.set("answered",false);
        			}
        			lview.render(collection);
        		}
        		qview.events["click button#answer"] = answerClick;
        		qview.delegateEvents();
        	};
    }
);