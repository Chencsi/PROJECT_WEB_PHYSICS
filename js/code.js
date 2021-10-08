/*
  Készítette: Chen Kevin 10.c
*/

/* VÁLTOZÓK */
let arrowup; let kep; let flip;

/* ALAPÉRTELMEZETT */
$(document).ready(function () {
  let baseUrl = (window.location).href;
  let koopId = baseUrl.substring(baseUrl.lastIndexOf('#'));
  $(".fadein, .home, #rolunk, #temakorok, #osszefoglalo").hide(0);
  $(".fadein").fadeIn(1500);
  if (window.location.href.indexOf("#") > -1) {
    if (koopId != "#") {
      $(".home").delay(0).fadeOut(0);
      $(koopId).delay(500).fadeIn(600)
      document.title = "OTL - " + koopId.substring(1, 10);

    } else {
      $(".home").fadeIn(1500);
    }
  } else {
    $(".home").fadeIn(1500);
  }
});

/* NAVIGÁCIÓ */
function NavFunction(event) {
  $(".home, #rolunk, #temakorok, #osszefoglalo").delay(150).fadeOut(500);
  let page = $(event.target).attr('class').split(" ")
  console.log("Tartalom cserélése a következőre: " + page[1])
  document.title = "OTL - " + page[1]
  $(".home").delay(1000).fadeOut(600);
  if (page[0] == "logo" || page[0] == "otl") {
    $(".home").delay(700).fadeIn(600)
  } else {
    $("#" + page[1]).delay(1000).fadeIn(600)
  }
}

/* LEGÖRDÜLŐ MENÜ ANIMÁCIÓ */
function dropdown(event) {
  kep = document.querySelector("." + event.target.className.substring(0, 5) + " " + ".arrow");
  flip = $(event.target).attr('class').split(" ")
  if (flip[0] == "flip1") {
    arrowRotate();
    $("#panel1, #panel1, #panel1").slideToggle("slow");
    $("#panel2, #panel3").slideUp();
  } else if (flip[0] == "flip2") {
    arrowRotate();
    $("#panel2, #panel2, #panel2").slideToggle("slow");
    $("#panel1, #panel3").slideUp();
  } else if (flip[0] == "flip3") {
    arrowRotate();
    $("#panel3, #panel3, #panel3").slideToggle("slow");
    $("#panel1, #panel2").slideUp();
  }
}

/* NYÍL FORDULÁSÁNAK ANIMÁCIÓJA */
function arrowRotate() {
  if (arrowup == undefined) { arrowup == false }
  if (arrowup == false) {
    kep.classList.add("arrow-up")
    kep.classList.remove("arrow-down")
    arrowup = true;
  } else {
    kep.classList.add("arrow-down")
    kep.classList.remove("arrow-up")
    arrowup = false;
  }
}

