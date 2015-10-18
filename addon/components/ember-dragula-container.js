import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement:function(){
		Ember.run.next(function(){
      let drake = this.get('parentView').drake || this.drake;
			drake.containers.push(this.element);

		}.bind(this));
	},
	setElementIdToChildren:function(){
		var childViews = this.get('childViews');
		var elementToChild = {};
		childViews.forEach(function(view){
			elementToChild[view.elementId] = view.tree;
		});
	},
	willDestroyElement:function(){

	}
});
