import Ember from 'ember';

const {Component, on} = Ember;

export default Component.extend({
	registerDrake: on('willInsertElement', function () {
		var options = this.get('config.options') || {};
		this.set('drake', window.dragula(options));
	}),

	setEventListeners: on('didInsertElement', function () {
		if (!this.get('config.enabledEvents')) {
      return;
    }
		this.get('config.enabledEvents').forEach(eventName => {
			this.drake.on(eventName, (...args) => {
        this.sendAction(eventName, args);
      });
		});
	}),

  destroyDrake: on('willDestroyElement', function () {
		this.drake.containers.removeObject(this.element);
		this.drake.destroy();
		this.set('drake', '');
	})
});
