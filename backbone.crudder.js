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

			console.log(options);

			options.collection.fetch({

        // Show the loader overlay
        beforeSend: options.beforeSend(),

        // Set any QS values we require
        data: options.data,

        // Has the collection been returned?
        success: function(collection, response, options) {

          if (options.afterSend) {


					}

					if (options.showSuccess) {



					}

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							collection: collection,
							response: response,
							options: options

            });

          }

        },

        error: function(collection, response, options) {

          if (options.afterSend) {

						

					}

          if (options.showError) {


						
					}

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							collection: collection,
							response: response,
							options: options

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

		}

	};

})(this, document, Backbone, _);