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

  title.innerHTML = `${nowDate.toLocaleTimeString()}`;

  const dayWeek = days[nowDate.getDay()];
  const day = nowDate.getDate();
  const month = months[nowDate.getMonth()];
  const year = nowDate.getFullYear();

  parraph.innerHTML = `${dayWeek}, ${day} ${month}. ${year}`;
}

setInterval(date, 1000);
