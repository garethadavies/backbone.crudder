/*
Backbone Crudder Settings
Set your prefered method of handling CRUD events
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
  Extend Backbone Crudder beforeSend
  @extends Backbone.Crudder.beforeSend.prototype
  */
  _.extend(Backbone.Crudder.beforeSend.prototype, {

    initialize: function() {

      // Activate beforeSend
      this.activated = true;

    },

    start: function() {

    }

  });

  /*
  Extend Backbone Crudder afterSend
  @extends Backbone.Crudder.afterSend.prototype
  */
  _.extend(Backbone.Crudder.afterSend.prototype, {

    initialize: function() {

      // Activate beforeSend
      this.activated = true;

    },

    start: function() {

    }

  });

  /*
  Extend Backbone Crudder onSuccess
  @extends Backbone.Crudder.onSuccess.prototype
  */
  _.extend(Backbone.Crudder.onSuccess.prototype, {

    initialize: function() {

      // Activate beforeSend
      this.activated = true;

    },

    start: function(options) {

    }

  });

  /*
  Extend Backbone Crudder onError
  @extends Backbone.Crudder.onError.prototype
  */
  _.extend(Backbone.Crudder.onError.prototype, {

    initialize: function() {

      // Activate beforeSend
      this.activated = true;

    },

    start: function(options) {

    }

  });

})(this, document, Backbone, _);