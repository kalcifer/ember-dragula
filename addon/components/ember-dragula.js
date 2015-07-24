import Ember from 'ember';

export default Ember.Component.extend({
	willInsertElement:function(){
		var options = this.config.options || {};
		this.set('drake', dragula(options));
		this.set('parent', this);
	},
	didInsertElement:function(){
		this.setEventListeners();	
	},
	setEventListeners:function(){
		this.config.eventList ? this.config.eventList.forEach(function(event){
			this.drake.on(event.name, function(){
				this.sendAction('dragulaEvent', event.name, arguments);
			}.bind(this))
		}.bind(this)) : ""
	},
	willDestroyElement:function(){
		this.drake.containers.removeObject(this.element);
		this.drake.destroy();
		this.set('drake', '');
	}
})