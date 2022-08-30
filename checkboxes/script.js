let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("click", checkedBetween);
});

let lastChecked;

function checkedBetween(e) {
  let isBetween = false;

  if (e.shiftKey && this.checked) {
    inputs.forEach((input) => {
      if (input == this || input == lastChecked) {
        isBetween = !isBetween;
      }
      if (isBetween) {
        input.checked = true;
      }
    });
  }
  lastChecked = this;
}
