/*
Backbone Crudder v0.1.0
*/

/*
Requires:
	* jQuery
  * Backbone
  * Underscore
Contents:
  * The Backbone Crudder
  * Event Functions
		* beforeSend
		* afterSend
		* onSuccess
		* onError
Author(s):
  * Gareth Davies @garethadavies
*/

;(function(window, document, Backbone, _, undefined) {

	'use strict';

	/**
  The Backbone Crudder
  @object Backbone.Crudder
  @param ?? {Integer} ??
  */
	Backbone.Crudder = {

		/**
    Creating
    @method creating
    @param ?? {Object} ??
    */
		creating: function(options) {

		},

		/**
    Reading
    @method reading
    @param ?? {Object} ??
    collection
    data (Object)
    */
		reading: function(options, callback) {

			// console.log(options);

			var that = this;

			options.collection.fetch({

        // Show the loader overlay
        beforeSend: new Backbone.Crudder.beforeSend().start(),

        // Set any QS values we require
        data: options.data,

        // Has the collection been returned?
        success: function(collection, response) {

          var afterSend = new Backbone.Crudder.afterSend().start();

					var onSuccess = new Backbone.Crudder.onSuccess().start({

						message: options.successMessage

					});

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							collection: collection,
							response: response

            });

          }

        },

        error: function(collection, response) {

          var afterSend = new Backbone.Crudder.afterSend().start();

					var onError = new Backbone.Crudder.onError().start({

						message: options.errorMessage

					});

					// Fire the callback
          if (callback) {

            callback({

							success: false,
							collection: collection,
							response: response

            });

          }

        }

      });

		},

		/**
    Updating
    @method updating
    @param ?? {Object} ??
    */
		updating: function(options) {

			console.log('updating');

		},

		/**
    Deleting
    @method deleting
    @param ?? {Object} ??
    */
		deleting: function(options) {

			console.log('deleting');

		}

	};

	/*
	Event Functions
	Only here to be extended via a settings file
	*/

	// beforeSend
	Backbone.Crudder.beforeSend = function() {};

	// afterSend
	Backbone.Crudder.afterSend = function() {};

	// onSuccess
	Backbone.Crudder.onSuccess = function() {};

	// onError
	Backbone.Crudder.onError = function() {};

})(this, document, Backbone, _);