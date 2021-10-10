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
  if ($(window).width() < 768) {
    if (!event.target.classList.contains("logo")){
      document.getElementById("mySidebar").classList.add("sidebar-close");
      document.getElementById("mySidebar").classList.remove("sidebar-open");
    }
  }
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
function dropdown(event) {            /* PÉLDÁUL FLIP1 */
  kep = document.querySelector("." + event.target.className.substring(0, 5) + " " + ".arrow");
  flip = $(event.target).attr('class').split(" ")
  if (flip[0] == "flip1") {
    arrowRotate(event);
    $("#arrow2, #arrow3").removeClass("arrow-down");
    $("#arrow2, #arrow3").addClass("arrow-up");
    $("#panel2, #panel3").slideUp();
    $("#panel1, #panel1, #panel1").slideToggle("slow");
  } else if (flip[0] == "flip2") {
    arrowRotate(event);
    $("#arrow1, #arrow3").removeClass("arrow-down");
    $("#arrow1, #arrow3").addClass("arrow-up");
    $("#panel1, #panel3").slideUp();
    $("#panel2, #panel2, #panel2").slideToggle("slow");
  } else if (flip[0] == "flip3") {
    arrowRotate(event);
    $("#arrow2, #arrow1").removeClass("arrow-down");
    $("#arrow2, #arrow1").addClass("arrow-up");
    $("#panel2, #panel1").slideUp();
    $("#panel3, #panel3, #panel3").slideToggle("slow");
  }
}

/* NYÍL FORDULÁSÁNAK ANIMÁCIÓJA */ /* HA RENDELKEZIK AZ ADOTT OSZTALLYAL, MEGKAPJA AZ ELLENKEZOJET */
function arrowRotate(event) { /* ALAPBÓL FELFELÉ NÉZ */
  if (kep.classList.contains("arrow-up")) {
    kep.classList.add("arrow-down")
    kep.classList.remove("arrow-up")
  } else {
    kep.classList.add("arrow-up")
    kep.classList.remove("arrow-down")
  }
}

/* NAVIGÁCIÓ ÖSSZECSUKÁS/KINYITÁS ANIMÁCIÓ */
function open_close() {
  if (document.getElementById("mySidebar").classList.contains("sidebar-open")) {
    document.getElementById("mySidebar").classList.add("sidebar-close");
    document.getElementById("mySidebar").classList.remove("sidebar-open");
  } else {
    document.getElementById("mySidebar").classList.add("sidebar-open");
    document.getElementById("mySidebar").classList.remove("sidebar-close");
  }
}