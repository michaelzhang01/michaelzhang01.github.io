$(document).ready(function() {
	$("#content").load("main.html")
	
	$(".pub").click(function(){
		$("#content").load("pub.html");
	});
	$(".main").click(function(){
		$("#content").load("main.html");
	});

});	

