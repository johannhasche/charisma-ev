// Control variables
var eventUpcoming = false;
var eventName = "Geburtstag"

// Rules for event bool
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

//cafeteria
$("table#gerichte").hide();
