// Control variables
var eventUpcoming = false;
var eventName = "Fest der Nationen"

//Events
if (eventUpcoming) {
  $(".currentEvent").html(eventName);
  $(".currentEvent").css("display", "block");
}
else {
  $(".currentEvent").css("display", "none");
  $(".eventAd").css("display", "none");
}

//Mobile
navOpen = false;
function RevealNav() {
  if (navOpen == true) {
    $("#mobileOptions").css("display", "none");
    navOpen = false;
  }
  else {
    $("#mobileOptions").css("display", "block");
    navOpen = true;
  }
}

//Clööb
//$(".toggle").hide();

//cafeteria
$("table#gerichte").hide();
