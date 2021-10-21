const displayTime = document.getElementById("digital-watch");

const audio = new Audio("../assets/music/bensound-memories.mp3");
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  displayTime.innerText = `${hour} : ${min} : ${sec}` /* adding time to the div */
  
  var secondTimer = setTimeout(() => { currentTime() }, 1000); /* setting timer */
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
    localStorage.setItem("setAlarmTime", input.val())
  }
}

function stopAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Alarm Stopped');
  }
}

currentTime();