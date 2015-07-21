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
			this.drake.on(event.name, function(data){
				this.sendAction('dragulaEvent', event.name, data);
			}.bind(this))
		}.bind(this)) : ""
	}
})