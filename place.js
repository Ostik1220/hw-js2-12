console.log(time);
const form = document.querySelector("#form");
let timerInterval;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearInterval(timerInterval);

  const CountdownTimer = {
    selector: "#timer-1",
    targetDate: new Date(time.value),
  };

  timerInterval = setInterval(() => {
    const daysSet = Math.floor(
      CountdownTimer.targetDate.getTime() / (1000 * 60 * 60 * 24)
    );
    const hoursSet = Math.floor(daysSet * 24);
    const minsSet = Math.floor(hoursSet * 60);
    const secsSet = Math.floor(minsSet * 60);

    const secondsSinceEpoch = Math.floor(Date.now() / 1000);
    const secondsLeft = Math.floor(secsSet - secondsSinceEpoch);
    const minsLeft = Math.floor(secondsLeft / 60);
    const hoursLeft = Math.floor(minsLeft / 60);
    const daysLeft = Math.floor(hoursLeft / 24);

    document.querySelector('[data-value="days"]').innerHTML = daysLeft;
    document.querySelector('[data-value="hours"]').innerHTML = Math.floor(
      hoursLeft - 24 * daysLeft - 3
    );
    document.querySelector('[data-value="mins"]').innerHTML = Math.floor(
      minsLeft - 60 * hoursLeft
    );
    document.querySelector('[data-value="secs"]').innerHTML = Math.floor(
      secondsLeft - 60 * minsLeft
    );

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
    
  if (document.querySelector('[data-value="days"]').innerHTML === "1") {
    document.querySelector(".day-name").innerHTML = "Day";
  } else {
    document.querySelector(".day-name").innerHTML = "Days";
  }

  if (document.querySelector('[data-value="hours"]').innerHTML === "1") {
    document.querySelector(".hour-name").innerHTML = "Hour";
  } else {
    document.querySelector(".hour-name").innerHTML = "Hours";
  }

  if (document.querySelector('[data-value="mins"]').innerHTML === "1") {
    document.querySelector(".min-name").innerHTML = "Minute";
  } else {
    document.querySelector(".min-name").innerHTML = "Minutes";
  }

  if (document.querySelector('[data-value="secs"]').innerHTML === "1") {
    document.querySelector(".sec-name").innerHTML = "Second";
  } else {
    document.querySelector(".sec-name").innerHTML = "Seconds";
  }
  }, 1000);

});