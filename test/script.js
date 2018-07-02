

var noSleep = new NoSleep();
var wakeLockEnabled = false;
var toggleEl = document.querySelector("div");

toggleEl.addEventListener('click', function() {
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
  } else {
   
  }
}, false);




/*
noSleep.disable(); // let the screen turn off.
wakeLockEnabled = false;
toggleEl.value = "Wake Lock is disabled";
document.body.style.backgroundColor = "";
*/