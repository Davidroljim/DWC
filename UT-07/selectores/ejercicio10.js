$(document).ready(function(){
  $("p").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("p").blur(function(){
    $(this).css("background-color", "green");
  });
});