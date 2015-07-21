import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement:function(){
		Ember.run.next(function(){
			this.parent.drake.containers.push(this.element)
		}.bind(this))
	},
	actions:{

	}
});