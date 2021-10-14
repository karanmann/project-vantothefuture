// function timeWatch(){
//     const myDate = new Date()
//     console.log(mydate);
//     const myDateFormatted = formatDate(myDate)
//     document.getElementById("clock_time") .innerHTML = time;
// }
// timeWatch();

// console.log(myDateFormatted);

//////////////////////////////////////////////////////////////////////////
// function  timeWatch(){
// var now = new Date();
//   time = now.toLocaleTimeString();
//   clock.textContent = time;
//   document.getElementById("clock_time") .innerHTML = time;

//   console.log(time);
// }

// timeWatch();
// ////////////////////////////////////////////////////////////////////////
// let currentTime = () => {
//     var date = new Date(); /* creating object of Date class */
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     hour = updateTime(hour);
//     min = updateTime(min);
//     sec = updateTime(sec);
//     document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    
//     secondTimer = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
//   }
  
//   function updateTime(secondTimer);