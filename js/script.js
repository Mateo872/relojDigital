const title = document.querySelector("#title-date");
const parraph = document.querySelector("#parraph-date");

const months = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

function date() {
  const nowDate = new Date();

  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();

  let amPm = "AM";

  if (hours > 12) {
    amPm = "PM";
    hours -= 12;
  }

  if (hours === 0) {
    hours = 12;
  }

  title.innerHTML = `${+hours}:${formatTime(+minutes)}:${formatTime(
    +seconds
  )} <span class="am-pm">${amPm}</span>`;

  const dayWeek = days[nowDate.getDay()];
  const day = nowDate.getDate();
  const month = months[nowDate.getMonth()];
  const year = nowDate.getFullYear();

  parraph.innerHTML = `${dayWeek}, ${day} ${month}. ${year}`;
}

function formatTime(time) {
  time = +time;

  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

setInterval(date, 1000);
