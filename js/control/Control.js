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
        return function(lview,qview,collection,players,aview,rview,wview) {
        		var _self = this;
        		_self.collection = collection;
        		_self.lview = lview;
        		_self.qview = qview;
        		_self.players = players;
        		_self.aview = aview;
        		_self.wview = wview;
        		_self.rview = rview;
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
        			var right = false;
        			if (+ans == model.get("answer")) {
        				right = true;
        				model.set("answered",true);
        				_self.players.addScore(model.get("points"));
        			} else {
        				model.set("answered",false);
        			}
        			_self.players.next();
        			_self.aview.render(_self.players);
        			rview.render(model,+ans,right);
        			
        		}
        		qview.events["click button#answer"] = answerClick;
        		qview.delegateEvents();
        		/**
        		 * Click on response screene
        		 * @param e - event
        		 */
        		function responseClick(e) {
        			if (!collection.finished()) {
        				lview.render(collection);
        			} else {
        				_self.wview.render(_self.players.best());
        			}
        		}
        		rview.events["click img"] = responseClick;
        		rview.delegateEvents();
        		
        	};
    }
);
