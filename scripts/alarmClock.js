const display = document.getElementById("clock");

const audio = new Audio("../assets/music/bensound-memories.mp3");
audio.loop = true;

let currentTime = () => {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  display.innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  
  var secondTimer = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(secondTimer) {
  if (secondTimer < 10) {
    return "0" + secondTimer;
  }
  else {
    return secondTimer;
  }
}

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if(alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert('Alarm set');
    }
  }
}

function stopAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Stop Alarm');
  }
}

currentTime();