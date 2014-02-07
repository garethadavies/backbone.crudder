/*
Backbone Crudder Settings AMD
This is example Crudder setup code 
*/

/*
Requires:
  * jQuery
  * Backbone
  * Underscore
  * backbone.crudder
Contents:
  * beforeSend
  * afterSend
  * onSuccess
  * onError
Author(s):
  * Gareth Davies @garethadavies
*/

define([

  'backbone.crudder'

], function(Crudder) {

  'use strict';

  return {

    /**
    Module Initialize
    @method initialize
    */
    initialize: function() {

      /*
      Extend Backbone Crudder
      @extends Backbone.Crudder.prototype
      */
      _.extend(Crudder.prototype, {

        /**
        Before Send
        @method beforeSend
        */
        beforeSend: function() {

          // What you want to happen before send

        },

        /**
        On Complete
        @method onComplete
        */
        onComplete: function() {

          // What you want to happen on complete

        },

        /**
        On Success
        @method onSuccess
        */
        onSuccess: function(options) {

          // What you want to happen on success

        },

        /**
        On Error
        @method onError
        */
        onError: function(options) {

          // What you want to happen on error

        }

      });

    }

  };

});