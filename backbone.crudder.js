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
  */
	Backbone.Crudder = {

		/**
    Creating
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

          // Do we perform an after send event?
          that.afterCheck();

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

          // Do we perform an after send event?
          that.afterCheck();

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

          // Do we perform an after send event?
          that.afterCheck();

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

          // Do we perform an after send event?
          that.afterCheck();

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

          // Do we perform an after send event?
          that.afterCheck();

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

          // Do we perform an after send event?
          that.afterCheck();

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

        }

      });

		},

		/**
    Before send check
    @method beforeCheck
    */
		beforeCheck: function() {

			var beforeSend = new Backbone.Crudder.beforeSend();

      if (beforeSend.activated) {

				beforeSend.start();

			}

		},

		/**
    After send check
    @method afterCheck
    */
		afterCheck: function() {

			var afterSend = new Backbone.Crudder.afterSend();

      if (afterSend.activated) {

				afterSend.start();

			}

		},

		/**
    On Success check
    @method successCheck
    */
		successCheck: function(options) {

			// Has a success message been supplied?
      if (options.successMessage) {

				var onSuccess = new Backbone.Crudder.onSuccess();

				// Has a onSuccess been activited?
				if (onSuccess.activated) {

					// Call the start method
					onSuccess.start({

						message: options.successMessage

					});

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

				var onError = new Backbone.Crudder.onError();

				// Has a onSuccess been activited?
				if (onError.activated) {

					// Call the start method
					onError.start({

						message: options.errorMessage

					});

				}

			}

		}

	};

	/*
	Event Functions
	Only here to be extended via a settings file
	*/

	// beforeSend
	Backbone.Crudder.beforeSend = function(options) {

		this.activated = false;
		this.initialize.apply(this);

	};

	_.extend(Backbone.Crudder.beforeSend.prototype, {

		initialize: function() {},
		start: function() {}

	});

	// afterSend
	Backbone.Crudder.afterSend = function(options) {

		this.activated = false;
		this.initialize.apply(this);

	};

	_.extend(Backbone.Crudder.afterSend.prototype, {

		initialize: function() {},
		start: function() {}

	});

	// onSuccess
	Backbone.Crudder.onSuccess = function(options) {

		this.activated = false;
		this.initialize.apply(this);

	};

	_.extend(Backbone.Crudder.onSuccess.prototype, {

		initialize: function() {},
		start: function() {}

	});

	// onError
	Backbone.Crudder.onError = function(options) {

		this.activated = false;
		this.initialize.apply(this);

	};

	_.extend(Backbone.Crudder.onError.prototype, {

		initialize: function() {},
		start: function() {}

	});

})(this, document, Backbone, _);
