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
         "lib/text!templates.html"],
	function(doc,$,itl,Question,QuestionView,html)
	{
        $("body").append(html);
        var question = new Question(
        		{
        			"id":"question-1",
            		"title":"What is you name?",
            		"category":"Yolo",
            		"question":"你的名字是甚麼?",
            		"answers":["Bob","Frank","George","Don"],
            		"answer":3,
            		"points":10
        		});
        var qview = new QuestionView(
        		{
        			"el":$("div#slide"),
        			"name":"question-view"
        		});
        qview.render(question);
	}
);
