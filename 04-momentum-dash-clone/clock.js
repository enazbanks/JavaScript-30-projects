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

  const time = `${h}:${m}<small>:${s} ${session}</small>`;
  // console.log(time);

  document.getElementById("display_clock").innerHTML = time;

  setTimeout(displayTime, 1000)
  // calls function after a number of milliseconds

  //change body background
  let bg;
  const userName = "Enaz";
  const user = document.getElementById("User")

  if (h < 8 && session === "AM") {
    user.innerHTML = `Good Morning ${userName}`;
    bg = `url(https://source.unsplash.com/kW1P8R-UoWI)`;
  }

  if (h < 8 && session === "AM") {
    user.innerHTML = `Good Morning ${userName}`;
    bg = `url(https://source.unsplash.com/kW1P8R-UoWI)`;
  } else if (h < 11 && session === "AM") {
    user.innerHTML = `Good Day ${userName}`;
    bg = `url(https://source.unsplash.com/kW1P8R-UoWI)`;
  } else if (h < 8 && session === "PM") {
    user.innerHTML = `Good Afternoon ${userName}`;
    bg = `url(https://source.unsplash.com/kW1P8R-UoWI)`;
  } else {
    user.innerHTML = `Good Night ${userName}`;
    bg = `url(https://source.unsplash.com/kW1P8R-UoWI)`;
  }

  //insert bg img
  const body = document.querySelector("body")
  body.style.background = `${bg} center/cover`;
};
