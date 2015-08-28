//Imports via require js
require.config({
    baseUrl: "",
    paths: {
        jquery: "lib/jquery-2.1.4",
        underscore: "lib/underscore"
    }
});
require(["lib/domReady!",
         "jquery",
         "lib/i18n!js/nls/ui",
         "js/model/Question",
         "js/view/QuestionView",
         "js/model/Questions",
         "js/view/ListView",
         "js/control/Control",
         "js/model/Players",
         "js/view/AddPlayer",
         "js/control/PlayerControl",
         "js/view/ResponseView", 
         "js/view/WinnerView",
         "js/config/Configuration",
         "lib/text!templates-chinese.html"],
	function(doc,$,itl,Question,QuestionView,Questions,ListView,Control,Players,AddPlayer,PlayerControl,ResponseView,WinnerView,Configuration,html)
	{
        $("body").append(html);
        var tmp = _.template($("script#intro").html());
        $("#intro").html(tmp());
        var coll = new Questions([]);
        for (var i = 0; i < Configuration.jsons.length;i++) {
        	coll.load(Configuration.jsons[i]);
        }
        var players = new Players();
        var aview = new AddPlayer(
        		{
        			"el":$("#players"),
        			"name":"add-player"
        		});
        var qview = new QuestionView(
        		{
        			"el":$("#slide"),
        			"name":"question-view"
        		});
        
        
        var lview = new ListView(
        		{
        			"el":$("#slide"),
        			"name":"label-view"
        		});
        var rview = new ResponseView(
            	{
    				"el":$("#slide"),
    				"name":"response-view"
    			});
        var wview = new WinnerView(
        	{
				"el":$("#slide"),
				"name":"winner-view"
			});
        var control = new Control(lview,qview,coll,players,aview,rview,wview);
        var playerControl = new PlayerControl(aview,players);
        lview.render(coll);
        aview.render(players);
	}
);
