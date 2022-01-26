$(document).ready(function(){
	$("#1").click(function(){
		alert($("p").text());
	});

    $("#2").click(function(){
		alert($("div").html());
	});


    $("#3").click(function(){
		alert($("#texto").val());
	});

    $("#4").click(function(){
		alert($("a").attr("href"));
	});
});