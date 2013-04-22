/*
Backbone Crudder Settings
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

;(function(window, document, Backbone, _, undefined) {

  'use strict';

  /*
  Extend Backbone Crudder
  @extends Backbone.Crudder.prototype
  */
  _.extend(Backbone.Crudder.prototype, {

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

  /*
  Initialise Backbone Crudder
  */
  Backbone.Crudder.initialize({

    // Set the value to true if you want to method to be called
    beforeSendActivated: true,
    onCompleteActivated: true,
    onSuccessActivated: true,
    onErrorActivated: true

  });

})(this, document, Backbone, _);