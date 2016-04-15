/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dragula',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/dragula/dist/dragula.js');
    app.import(app.bowerDirectory + '/dragula/dist/dragula.css');
  },
};
