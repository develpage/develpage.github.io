

var noSleep = new NoSleep();
var wakeLockEnabled = false;

document.body.addEventListener('touchstart', function() {

  if (!wakeLockEnabled) {
    console.log('sddsad');
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