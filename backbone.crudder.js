/*
Backbone Crudder v0.1.0
*/

/*
Requires:
	* jQuery
  * Backbone
  * Underscore
Contents:
  * 
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
    @method creating
    @param ?? {Object} ??
    collection
    beforeSend
    afterSend
    onSuccess
    onError
    data (Object)
    callback
    */
		reading: function(options, callback) {

			// console.log(options);

			var that = this;

			options.collection.fetch({

        // Show the loader overlay
        beforeSend: this.beforeSend(),

        // Set any QS values we require
        data: options.data,

        // Has the collection been returned?
        success: function(collection, response) {

          that.afterSend();

					that.onSuccess({

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

          that.afterSend();

					that.onError({

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

		updating: function(options) {

			console.log('updating');

		},

		deleting: function(options) {

			console.log('deleting');

		},

		beforeSend: function() {

			// This method can be used to perform any actions
			// that are required before the AJAX request
			// e.g. Show a loader graphic
			console.log('Before Send');

		},

		afterSend: function() {

			// This method can be used to perform any actions
			// that are required after the AJAX request has completed
			// e.g. Hide a loader graphic
			console.log('After send');

		},

		onSuccess: function(options) {

			// This method can be used to perform any actions
			// that are required after a successful request
			// e.g. Show a message to inform the user all is ok
			console.log('Data received');

		},

		onError: function(options) {

			// This method can be used to perform any actions
			// that are required after a unsuccessful request
			// e.g. Show a message to inform the user all is not ok
			console.log('Unable to retrieve data');

		}

	};

})(this, document, Backbone, _);