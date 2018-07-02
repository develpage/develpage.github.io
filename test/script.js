

var noSleep = new NoSleep();
var wakeLockEnabled = false;

document.body.addEventListener('touchmove', function() {

  if (!wakeLockEnabled) {
    console.log('sddsad');
    noSleep.enable();
    wakeLockEnabled = true;
  } 
}, false);




/*
noSleep.disable(); // let the screen turn off.
wakeLockEnabled = false;
toggleEl.value = "Wake Lock is disabled";
document.body.style.backgroundColor = "";
*/