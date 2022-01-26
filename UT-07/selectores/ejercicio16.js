$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({
        left: '+=250px',
        height: '150px',
        "font-size": "200%",
        width: '150px'
      });
    });
  });