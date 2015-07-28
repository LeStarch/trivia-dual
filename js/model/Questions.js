/**
 * A collection representing many questions.
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
        return Backbone.Collection.extend({
        		"url":"abc",
            	"model":Question
            });
    }
);