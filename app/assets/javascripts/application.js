function dah(){

	for (i=0; i<document.getElementsByClassName("undoDiv").length;i++){
	document.getElementsByClassName("undoDiv")[i].hidden=false;

	}
	for (i=0; i<document.getElementsByClassName("doneDiv").length;i++){
	document.getElementsByClassName("doneDiv")[i].hidden=true;

	}
}
function nah(){
	for (i=0; i<document.getElementsByClassName("undoDiv").length;i++){
	document.getElementsByClassName("undoDiv")[i].hidden=true;

	}
	for (i=0; i<document.getElementsByClassName("doneDiv").length;i++){
	document.getElementsByClassName("doneDiv")[i].hidden=false;

	}
} 

function allnd(){
	for (i=0; i<document.getElementsByClassName("undoDiv").length;i++){
	document.getElementsByClassName("undoDiv")[i].hidden=false;

	}
	for (i=0; i<document.getElementsByClassName("doneDiv").length;i++){
	document.getElementsByClassName("doneDiv")[i].hidden=false;

	}
}


// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
