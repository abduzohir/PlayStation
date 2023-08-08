const day = document.querySelector('.timer-day')
const hours = document.querySelector('.timer-hours')
const min = document.querySelector('.timer-min')
const sec = document.querySelector('.timer-sec')
function clock(){
  const time = new Date();
  const timeDay = 28 - time.getDay();
  const timeHours = 24 - time.getHours();
  const timeSeconds = 60 - time.getSeconds();
  const timeMinutes = 60 - time.getMinutes();
  console.log(timeDay ,timeHours ,timeMinutes, timeSeconds);
  day.innerHTML = timeDay < 10 ?`0${timeDay}`:timeDay;
  sec.innerHTML = timeSeconds < 10 ?`0${timeSeconds}`:timeSeconds;
  hours.innerHTML = timeHours < 10 ?`0${timeHours}`:timeHours;
  min.innerHTML = timeMinutes < 10 ?`0${timeMinutes}`:timeMinutes;
  setTimeout(clock, 1000);
}
clock();