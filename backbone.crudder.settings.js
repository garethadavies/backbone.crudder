/*
Backbone Crudder Settings v0.1.0
Set your prefered method of handling CRUD events
*/

/*
Requires:
	* jQuery
  * Backbone
  * Underscore
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

    start: function() {

			console.log('I have extended the before send function');

		}

  });

  /*
  Extend Backbone Crudder afterSend
  @extends Backbone.Crudder.afterSend.prototype
  */
  _.extend(Backbone.Crudder.afterSend.prototype, {

    start: function() {

			console.log('I have extended the after send function');

		}

  });

  /*
  Extend Backbone Crudder onSuccess
  @extends Backbone.Crudder.onSuccess.prototype
  */
  _.extend(Backbone.Crudder.onSuccess.prototype, {

    start: function(options) {

			console.log('I have extended the on success function');
			console.log(options.message);

		}

  });

  /*
  Extend Backbone Crudder onError
  @extends Backbone.Crudder.onError.prototype
  */
  _.extend(Backbone.Crudder.onError.prototype, {

    start: function(options) {

			console.log('I have extended the on error function');
			console.log(options.message);

		}

  });

})(this, document, Backbone, _);