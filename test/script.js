


var noSleep = new NoSleep();
var wakeLockEnabled = false;


document.addEventListener('click', function() {
  console.log('eee');
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
  } else {
   
  }
}, false);

/*
noSleep.disable(); // let the screen turn off.
wakeLockEnabled = false;
*/