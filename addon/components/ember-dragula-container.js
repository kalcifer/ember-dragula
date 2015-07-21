import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement:function(){
		Ember.run.next(function(){
			this.get('parentView').drake.containers.push(this.element)
		}.bind(this))
	},
	willDestroyElement:function(){
		this.get('parentView').drake.containers.removeObject(this.element);
	}
});