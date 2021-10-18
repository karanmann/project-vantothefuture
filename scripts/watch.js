// // ----------------- digital Clock

// setInterval(watch, 1000)

// function watch()
// {
//     var currentDate = new Date()
//     var hour = currentDate.getHours();
//     var minute =currentDate.getMinutes();
//     var second = currentDate.getSeconds();
//     var section = "AM";

//     if (hour > 12) {
//         hour = hour -12;
//         section = "PM"
//     }

//     if (hour == 0) {
//         hour = 12;
//         section ="AM"
//     }
//     hour = (hour<10) ? "0" + hour : hour
//     minute = (minute <10) ? "0" + minute : minute
//     second = (second <10) ? "0" + second :second

//     time = hour + ":" + minute + ":" + second + " " + section
//     document.getElementById("watch").innerHTML =time


// }



// -------------------- Clock ------------------

function clock() {
    date = new Date(); //object of date()
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
} 

setInterval(clock, 1000);