let inputs = document.querySelectorAll(".controls input");
let headerInput = document.querySelector("input");

function updateChange() {
  let suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", updateChange);
});

inputs.forEach((input) => {
  input.addEventListener("mousemove", updateChange);
});

function changeSize() {
  document.documentElement.style.setProperty("--header", this.value + "px");
}

headerInput.addEventListener("change", changeSize);
headerInput.addEventListener("mousemove", changeSize);
