// select all variables
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// build functions

function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function updateButton() {
  let icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip(e) {
  nextTime = this.dataset.skip;
  video.currentTime += parseFloat(nextTime);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  let scrupTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrupTime;
}
// add event listners

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});

progress.addEventListener("click", scrub);
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", () => {
  if (mousedown) scrub;
});
