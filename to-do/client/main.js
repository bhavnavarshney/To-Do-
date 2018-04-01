import {Template} from 'meteor/templating';
import './main.html';

if(Meteor.isClient){
Template.body.helpers({
	task_iteration : [{text:'My first task'},{text:'My Second Task'},{text:'My third task'}]
});
}