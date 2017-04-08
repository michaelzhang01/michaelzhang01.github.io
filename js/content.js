$(document).ready(function() {
	$("#content").load("main.html"); 
	$("#sidebar").load("sidebar.html"); 
	
	$("#main").click(function(){
		$("#content").load("main.html");
	});

	$("#pub").click(function(){
		$("#content").load("publications2.html");
	});
	
});	

