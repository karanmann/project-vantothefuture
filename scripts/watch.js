const clock = () => {
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


const updateDate = () => {
  var fullDate = new Date();

  var monthList = [
  'January', 
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

  var year = fullDate.getFullYear();
  var month = monthList[fullDate.getMonth()];
  var date = fullDate.getDate();
  let today = `${month} ${date},${year}`;
  document.querySelector('#date').innerText = today;
};

setInterval(clock, 1000);
updateDate();
