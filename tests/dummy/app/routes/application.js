import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return {
			'dragulaoptions':{
				'options':{
					copy: false,           // elements are moved by default, not copied
					revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
					removeOnSpill: false,
					mirrorContainer:document.getElementById('mirror')
				},
				'eventList':[{
					name:'drag'
				},{
					name:'drop'
				}]
			}
		};
	},
	actions:{
		'dragulaEvent':function(eventName, data){
			console.log();
		}
	}
});
