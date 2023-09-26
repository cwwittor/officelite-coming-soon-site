let currentSeconds = 0;
let currentMinutes = 0;
let currentHours = 0;
let currentDays = 0;

let currentDateString = "";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// document.getElementById("deadline-date").innerHTML = "25 Dec 2023";

// function setDeadline() {
//   // const d = new Date("2023-12-25 12:00:00");
//   // document.getElementById("deadlineDate").innerHTML = `${d
//   //   .getDate()
//   //   .format("DD MMM YYYY")} ${d.getMonth()} ${d.getFullYear()}`;
//   document.getElementById("deadlineDate").innerHTML = "25 Dec 2023";
// }

function getDate() {
  const d = new Date("2023-12-25 12:00:00");
  const today = new Date();

  let timeDifference = d.getTime() - today.getTime();

  var day = Math.floor(timeDifference / (1000 * 3600 * 24));
  var hour = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
  var minute = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
  var second = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;
}

//UNCOMMENT THIS TO MAKE TIME WORK
setInterval(getDate, 1000);
// this.setDeadline();
