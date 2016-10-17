import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';
 
Template.body.helpers({
  tasks(){
  	return Tasks.find({}, {sort: { createdAt: -1}});
  },
});

Template.body.events({
	'submit .new-task'(event){
		//prevent default browser from submit
		event.preventDefault();

		//Get value from form element

	const target = event.target;
	const text = target.text.value;
	console.log(event);

	//Insert a task into collection
	Tasks.insert({
		text,
		createdAt: new Date(), //current time

	});
	//clear form

	target.text.value = '';
	//return false;
	},
});