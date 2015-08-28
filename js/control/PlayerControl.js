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
        return function(aview,players) {
        		var _self = this;
        		_self.players = players;
        		_self.aview = aview;
        		
        		function addPlayer() {
        			var name = $(_self.aview.$el).find("input#new-player").val();
        			if (name == "") {
        				return;
        			}
        			_self.players.add({"id":name,"name":name,"score":0});
        			_self.aview.render(_self.players);
        		}
        		aview.events["click button#add"] = addPlayer;
        		aview.delegateEvents();
        	};
    }
);