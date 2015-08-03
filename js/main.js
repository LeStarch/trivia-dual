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
         "js/config/Configuration",
         "lib/text!templates.html"],
	function(doc,$,itl,Question,QuestionView,Questions,ListView,Control,Configuration,html)
	{
        $("body").append(html);
        var coll = new Questions([]);
        for (var i = 0; i < Configuration.jsons.length;i++) {
        	coll.load(Configuration.jsons[i]);
        }
        var qview = new QuestionView(
        		{
        			"el":$("div#slide"),
        			"name":"question-view"
        		});
        
        
        var lview = new ListView(
        		{
        			"el":$("div#slide"),
        			"name":"label-view"
        		});
        var control = new Control(lview,qview,coll);
        lview.render(coll);
	}
);
