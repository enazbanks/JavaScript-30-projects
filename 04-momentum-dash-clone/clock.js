addEventListener('DOMContentLoaded', (displayTime));

function displayTime() {
  let date = new Date();

  // console.log(date.setTime(50));
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
    session = "AM";
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? h = "0" + h : h;
  m = m < 10 ? m = "0" + m : m;
  s = s < 10 ? s = "0" + s : s;

  const time = h + ":" + m + ":" + s + "" + "|" + session;
  // console.log(time);

  document.getElementById("display_clock").innerHTML = time;

  setTimeout(displayTime, 1000)
  // calls function after a number of milliseconds

};
