/*
  Készítette: Chen Kevin 10.c
*/
$(document).ready(function(){
  let baseUrl = (window.location).href;
  let koopId = baseUrl.substring(baseUrl.lastIndexOf('#'));
  $(".fadein, .home, #rolunk, #temakorok, #osszefoglalo").hide(0);
  $(".fadein").fadeIn(1500);
  if (window.location.href.indexOf("#") > -1) {
    if (koopId != "#") {
      $(".home").delay(0).fadeOut(0);
      $(koopId).delay(500).fadeIn(600)
    } else {
      $(".home").fadeIn(1500);
    }
  } else {
    $(".home").fadeIn(1500);
  }
});

function logoFunction(){
  $(".home, #rolunk, #temakorok, #osszefoglalo").delay(150).fadeOut(500);
  $(".home").delay(500).fadeIn(500)
}

function NavFunction(event){
  $(".home, #rolunk, #temakorok, #osszefoglalo").delay(150).fadeOut(500);
  let page = $(event.target).attr('class').split(" ")
  console.log("Tartalom cserélése a következőre: "+page[1])
  $(".home").delay(1000).fadeOut(600);
  $("#"+page[1]).delay(1000).fadeIn(600)
}

function dropdown(event){
  let flip = $(event.target).attr('class').split(" ")
  if (flip[0] == "flip1"){
    $("#panel1, #panel2, #panel3").slideToggle("slow");
    $("#panel4, #panel5, #panel6, #panel7, #panel8, #panel9").slideUp();
  } else if (flip[0] == "flip2"){
    $("#panel4, #panel5, #panel6").slideToggle("slow");
    $("#panel1, #panel2, #panel3, #panel7, #panel8, #panel9").slideUp();
  } else if (flip[0] == "flip3"){
    $("#panel7, #panel8, #panel9").slideToggle("slow");
    $("#panel4, #panel5, #panel6, #panel1, #panel2, #panel3").slideUp();
  }
}

$("button").click(function(){
  $("div").animate({left: '250px'});
});  