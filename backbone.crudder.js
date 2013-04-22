/*
Backbone Crudder v0.2.0
Cutting down on boilerplate code for CRUD functionality
*/

/*
Requires:
	* jQuery
  * Backbone
  * Underscore
Contents:
  * The Backbone Crudder
  * Crudder Prototype
Author(s):
  * Gareth Davies @garethadavies
*/

;(function(window, document, Backbone, _, undefined) {

	'use strict';

	/**
  The Backbone Crudder
  @object Backbone.Crudder
  */
	Backbone.Crudder = {

		/**
    Initialize
    @method initialize
    @param beforeSendActivated {Boolean} Has this options been activated?
    @param onCompleteActivated {Boolean} Has this options been activated?
    @param onSuccessActivated {Boolean} Has this options been activated?
    @param onErrorActivated {Boolean} Has this options been activated?
    */
		initialize: function(options) {

			// Initilise the prototype
			this.proto = new Backbone.Crudder.prototype.initialize(options);

		},

		/**
    Creating & Updating
    @method creating
    @param entity {Object} The collection or model to fetch
    @param entityData {Object} The entity data to save
    @param wait {Boolean} Wait for a server to respond
    @param successMessage {String} Message shown on a successful request
    @param errorMessage {String} Message shown on a failed request
    */
		creatingUpdating: function(options, callback) {

			var that = this;

			// Remove this model
      options.entity.save(options.entityData, {

        // Wait for a response from the server
        wait: options.wait,

        // Show the loader overlay or whatever
        beforeSend: this.beforeCheck(),

        // Has the collection been returned?
        success: function(data, response) {

          // Do we perform an on success event?
          that.successCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							data: data,
							response: response

            });

          }

        },

        error: function(data, response) {

          // Do we perform an on error event?
          that.errorCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: false,
							data: data,
							response: response

            });

          }

        },

        complete: function() {

					// Do we perform an after send event?
          that.completeCheck();

        }

      });

		},

		/**
    Reading
    @method reading
    @param entity {Object} The collection or model to fetch
    @param successMessage {String} Message shown on a successful request
    @param errorMessage {String} Message shown on a failed request
    */
		reading: function(options, callback) {

			var that = this;

			// Fetch the data
			options.entity.fetch({

        // Show the loader overlay or whatever
        beforeSend: this.beforeCheck(),

        // Set any QS values we require
        data: options.data,

        // Has the collection been returned?
        success: function(data, response) {

          // Do we perform an on success event?
          that.successCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							data: data,
							response: response

            });

          }

        },

        error: function(data, response) {

          // Do we perform an on error event?
          that.errorCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: false,
							data: data,
							response: response

            });

          }

        },

        complete: function() {

					// Do we perform an after send event?
          that.completeCheck();

        }

      });

		},

		/**
    Deleting
    @method deleting
    @param entity {Object} The collection or model to fetch
    @param wait {Boolean} Wait for a server to respond
    @param successMessage {String} Message shown on a successful request
    @param errorMessage {String} Message shown on a failed request
    */
		deleting: function(options, callback) {

			var that = this;

			// Remove this model
      options.entity.destroy({

        // Wait for a response from the server
        wait: options.wait,

        // Show the loader overlay or whatever
        beforeSend: this.beforeCheck(),

        // Has the collection been returned?
        success: function(data, response) {

          // Do we perform an on success event?
          that.successCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: true,
							data: data,
							response: response

            });

          }

        },

        error: function(data, response) {

          // Do we perform an on error event?
          that.errorCheck(options);

					// Fire the callback
          if (callback) {

            callback({

							success: false,
							data: data,
							response: response

            });

          }

        },

        complete: function() {

					// Do we perform an after send event?
          that.completeCheck();

        }

      });

		},

		/**
    Before send check
    @method beforeCheck
    */
		beforeCheck: function() {

			// Has the 'beforeSend' option been activated?
			if (this.proto.beforeSendActivated) {

				// Call the beforeSend method
				var beforeSend = new Backbone.Crudder.prototype.beforeSend();

			}

		},

		/**
    On complete check
    @method completeCheck
    */
		completeCheck: function() {

			// Has the 'onComplete' option been activated?
			if (this.proto.onCompleteActivated) {

				// Call the onComplete method
				var onComplete = new Backbone.Crudder.prototype.onComplete();

			}

		},

		/**
    On Success check
    @method successCheck
    */
		successCheck: function(options) {

			// Has a success message been supplied?
			if (options.successMessage) {

				// Has the 'onSuccess' option been activated?
				if (this.proto.onSuccessActivated) {

					// Call the onSuccess method
					var onSuccess = new Backbone.Crudder.prototype.onSuccess(options);

				}

			}

		},

		/**
    On Error check
    @method errorCheck
    */
		errorCheck: function(options) {

			// Has an error message been supplied?
			if (options.errorMessage) {

				// Has the 'onError' option been activated?
				if (this.proto.onErrorActivated) {

					// Call the onError method
					var onError = new Backbone.Crudder.prototype.onError(options);

				}

			}

		}

	};

	/*
	Crudder Prototype
	@prototype
	*/

	Backbone.Crudder.prototype = function(options) {

		this.initialize.apply(this);

	};

	_.extend(Backbone.Crudder.prototype, {

		/**
    Initialize
    @method initialize
    @param beforeSendActivated {Boolean} Has this options been activated?
    @param onCompleteActivated {Boolean} Has this options been activated?
    @param onSuccessActivated {Boolean} Has this options been activated?
    @param onErrorActivated {Boolean} Has this options been activated?
    */
		initialize: function(options) {

			// Has the 'beforeSend' option been activated?
			if (options.beforeSendActivated) {

				this.beforeSendActivated = options.beforeSendActivated;

			}
			else {

				this.beforeSendActivated = false;

			}

			// Has the 'onComplete' option been activated?
			if (options.onCompleteActivated) {

				this.onCompleteActivated = options.onCompleteActivated;

			}
			else {

				this.onCompleteActivated = false;

			}

			// Has the 'onSuccess' option been activated?
			if (options.onSuccessActivated) {

				this.onSuccessActivated = options.onSuccessActivated;

			}
			else {

				this.onSuccessActivated = false;

			}

			// Has the 'onError' option been activated?
			if (options.onErrorActivated) {

				this.onErrorActivated = options.onErrorActivated;

			}
			else {

				this.onErrorActivated = false;

			}

		},

		/**
    Before Send
    @method beforeSend
    */
		beforeSend: function() {},

		/**
    On Complete
    @method onComplete
    */
		onComplete: function() {},

		/**
    On Success
    @method onSuccess
    */
		onSuccess: function() {},

		/**
    On Error
    @method onError
    */
		onError: function() {}

	});

})(this, document, Backbone, _);
