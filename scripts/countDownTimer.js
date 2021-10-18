const startingMinutes = 10;
let time = startingMinutes * 60;
console.log(time);

const countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown (){
    const minutes = Math.floor(time / 60);
    let seconds = time %60;

    countdownEL.innerHTML = `${minutes}  ${seconds}`
    time--;
}