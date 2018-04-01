import {Template} from 'meteor/templating';
import {Tasks} from '../api/task.js';
import './body.html';



Template.display_task.all_items = function(){

	return Tasks.find({},{sort:{createdAt : -1}});
};

Template.body.events({
	'submit .add_task'(a){
		a.preventDefault();
		const x = event.target.text.value;
		Tasks.insert({
			text : x,
			createdAt : new Date(),
		});
		event.target.text.value="";
	},
	'click .updateMe'(){
		var x = prompt("Enter the text ");
		Tasks.update(this._id,{text : x});
	},
	'click .toggle-check'(){
		Tasks.remove(this._id);
	},
});