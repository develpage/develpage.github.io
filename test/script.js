var noSleep = new NoSleep();
var wakeLockEnabled = false;

document.body.addEventListener('click', function() {

  if (!wakeLockEnabled) {
    noSleep.enable();
    wakeLockEnabled = true;
    document.body.style.backgroundColor = "green";
  } 
}, false);

/*
noSleep.disable(); // let the screen turn off.
wakeLockEnabled = false;
toggleEl.value = "Wake Lock is disabled";
document.body.style.backgroundColor = "";
*/