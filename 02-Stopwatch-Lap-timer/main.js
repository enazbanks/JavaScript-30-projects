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

  // Start Button
  startButton.onclick = function () {
    Interval = setInterval(startTimer, 10);
    dimEffect();
  };

  // Stop Button
  stopButton.onclick = function () {
    clearInterval(Interval);

    const lap = document.getElementById("laps");
    const li = document.createElement("li");
    li.innerHTML = `lap: ${minutes.innerHTML}:${seconds.innerHTML}:${tens.innerHTML}`;

    lap.appendChild(li);
    dimEffect();
  };

  // Reset Button

  resetButton.onclick = function () {
    clearInterval(Interval);

    minutesSet = 0;
    secondsSet = 0;
    tensSet = 0;

    minutes.innerHTML = minutesSet;
    seconds.innerHTML = secondsSet;
    tens.innerHTML = tensSet;

    document.getElementById("laps").innerHTML = "";
  };

  function startTimer()   {
    tensSet++;
    // console.log(tens++);
    if(tensSet < 9 ){
      tens.innerHTML = "0" + tensSet;
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

  // diming effect function
  function dimEffect() {
    const lapTime = document.querySelector(".lap-timer");
    lapTime.classList.toggle("diming-effect");
  };
};
