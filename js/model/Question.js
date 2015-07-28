/**
 * A model representing a question.
 * @author starchmd
 */
define(["jquery",
        "underscore",
        "lib/backbone",
        "js/config/Configuration"],
    function($,_,Backbone,Config) {
        /**
         * Model of a question
         */
        return Backbone.Model.extend({
            "defaults":
            	{
            		"title":"Anonymous",
            		"category":"Uncategorized",
            		"question":"Why is there no question?",
            		"answers":["Why have a question at all?","Perhaps there is","It was forgotten","It has no answer"],
            		"answer":0,
            		"points":10
            	}
            });
    }
);