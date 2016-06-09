/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dragula',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/dragula/dist/dragula.css');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      // If this flag is present, the addon is being built in FastBoot.
      // The bower component causes FastBoot to crash, so only import in
      // the browser build
      app.import(app.bowerDirectory + '/dragula/dist/dragula.js');
    }
  },
};
