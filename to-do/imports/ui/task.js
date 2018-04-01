import {Template} from 'meteor/templating';
import {Tasks} from '../api/task.js';
import './task.html';

Template.task1.events({
	'click .toggle-checked'(){
		Tasks.update(this._id,{$set : {checked : !this.checked },});
	},
	'click .delete'(){
	Tasks.remove(this._id);
	},
});