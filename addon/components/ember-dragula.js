import Ember from 'ember';

const {Component, on} = Ember;

export default Component.extend({
	registerDrake: on('willInsertElement', function () {
		var options = this.config.options || {};
		this.set('drake', window.dragula(options));
	}),

	setEventListeners: on('didInsertElement', function () {
		if (!this.config.eventList) {
      return;
    }
		this.config.eventList.forEach(event => {
			this.drake.on(event.name, function () {
				this.sendAction('dragulaEvent', event.name, arguments);
			}.bind(this));
		});
	}),

  destroyDrake: on('willDestroyElement', function () {
		this.drake.containers.removeObject(this.element);
		this.drake.destroy();
		this.set('drake', '');
	})
});
