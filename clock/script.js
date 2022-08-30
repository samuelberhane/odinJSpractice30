let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondDegree = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondDegree + 90}deg)`;

  let min = now.getMinutes();
  let minDegree = (min / 60) * 360;
  minHand.style.transform = `rotate(${minDegree + 90}deg)`;

  let hour = now.getHours();
  let hourDegree = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegree + 90}deg)`;
}

setInterval(setDate, 1000);
