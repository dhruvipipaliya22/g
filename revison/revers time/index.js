// revers time
const reverstime = (hours, minite, second) => {
    const interval = setInterval(() => {
        if (hours == 0 && minite == 0 && second == 0) {
            return clearInterval(interval);
        }
        if (minite == 0 && second == 0) {
            hours--;
            minite = 59;
            second = 59;
        }
        if (second == 0) {
            minite--;
            second = 59;
        }
        second--;
        document.getElementById("result").innerHTML = `${hours}:${minite}:${second}`;
    }, 1000)
}
document.getElementById("submit").addEventListener("click", function () {
    let hours = document.getElementById("hours").value;
    let minute = document.getElementById("minite").value;
    let second = document.getElementById("second").value;
    reverstime(hours, minute, second);
});

// date $ time
setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const dayname = days[date.getDay()];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const AmPm = hours <= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
    let secondsDisplay = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("date").innerHTML = day + " - " + month + " - " + year + " " + " , " + dayname;
    document.getElementById("time").innerHTML = hours + " : " + minutesDisplay + " : " + secondsDisplay + " " + AmPm;
}, 1000);

// enter time
document.getElementById("start").addEventListener("click", function () {
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    hours = Math.max(0, Math.min(24, hours));
    minutes = Math.max(0, Math.min(60, minutes));
    seconds = Math.max(0, Math.min(60, seconds));

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    let interval = setInterval(function () {
      let hours = Math.floor(totalTime / 3600);
      let minutes = Math.floor((totalTime % 3600) / 60);
      let seconds = totalTime % 60;

      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      totalTime--;

      if (totalTime < 0) {
        clearInterval(interval);
        document.getElementById("counter").innerHTML = "Time's up!";
      } else {
        document.getElementById("counter").innerHTML = `${hours}:${minutes}:${seconds}`;
      }
    }, 1000);
  });