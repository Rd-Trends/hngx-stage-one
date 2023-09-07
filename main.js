const today = new Date();
const day = today.getUTCDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOFWeek = dayNames[day];
const UTCTime = Date.now();

document.getElementById("day").innerHTML = dayOFWeek;
document.getElementById("time").innerHTML = UTCTime;
