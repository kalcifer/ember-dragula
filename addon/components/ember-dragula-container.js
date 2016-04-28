import Ember from 'ember';

const {Component, on} = Ember;

export default Component.extend({

  getDrake: function(){
    return this.get('parentView.drake') || this.get('drake');
  },

  didUpdateAttrs: function(attrs){
    this._super(...arguments);
    if (attrs.oldAttrs && attrs.oldAttrs.drake && attrs.oldAttrs.drake.containers) {
      attrs.oldAttrs.drake.containers.removeObject(this.element);
    }
  },


  didReceiveAttrs: function () {
    this._super(...arguments);
    Ember.run.next(() => {
      let drake = this.getDrake();
      //if (drake && !drake.containers.contains(this.element)) {
      if(drake){
        drake.containers.push(this.element);
      }
    });
  },

  unRegisterFromDrake: on('willDestroyElement', function () {
    let drake = this.getDrake();
    if (drake && drake.containers) {
      drake.containers.removeObject(this.element);
    }
  })
});
