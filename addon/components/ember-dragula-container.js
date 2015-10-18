import Ember from 'ember';

const {Component, on} = Ember;

export default Component.extend({
  registerOnDrake: on('didInsertElement', function () {
    Ember.run.next(() => {
      let drake = this.get('parentView').drake || this.drake;
      drake.containers.push(this.element);
    });
  })
});
