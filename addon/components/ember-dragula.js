import Ember from 'ember';
import canUseDOM from 'ember-dragula/utils/can-use-dom';

const {Component, on} = Ember;

export default Component.extend({

    drake: null,

    destroyDrake: function () {
        var drake = this.get('drake');
        if (drake) {
            if (this.element) {
                drake.containers.removeObject(this.element);
            }
            drake.destroy();
        }
    },

    didReceiveAttrs: function () {
        this._super(...arguments);
        this.destroyDrake();
        var options = this.get('config.options') || {};
        if (canUseDOM) {
            this.set('drake', window.dragula(options));
        }
        this.setEventListeners();
    },

    setEventListeners: function () {
        if (!this.get('config.enabledEvents')) {
            return;
        }
        this.get('config.enabledEvents').forEach(eventName => {
            this.get('drake').on(eventName, (...args) => {
                this.sendAction(eventName, ...args);
            });
        });
    },

    cleanupDrake: on('willDestroyElement', function () {
        this.destroyDrake();
        this.set('drake', null);
    })
});
