window.onload = function () {
  const minutes = document.getElementById("minutes");
  const tens = document.getElementById("tens");
  const seconds = document.getElementById("seconds");

  const startButton = document.getElementById("start-btn");
  const stopButton = document.getElementById("stop-btn");
  const resetButton = document.getElementById("reset-btn");

  let minutesSet = 00;
  let secondsSet = 00;
  let tensSet = 00;
  let Interval;

  startButton.onclick = function () {
    Interval = setInterval(startTimer, 10);
  };

  function startTimer()   {
    tens++;
    // console.log(tens++);
    if(tensSet < 9 ){
      tens.innerHTML = "0" + tens;
    }
    if(tensSet > 9 ) tens.innerHTML = tensSet;

    if(tensSet > 99 ) {
      secondsSet++;
      seconds.innerHTML = "0" + secondsSet;
      tensSet = 0;
      tens.innerHTML = "0" + 0;
    }

    if(secondsSet > 9) {
      seconds.innerHTML = secondsSet
    }

    if(secondsSet == 60){
      minutesSet++;
      minutes.innerHTML = "0" + minutesSet;
      secondsSet = 0;
    }

    if(minutesSet > 9) {
      minutes.innerHTML = minutesSet;
    }
  };
};
