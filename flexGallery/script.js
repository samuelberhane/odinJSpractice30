let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});
panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex-grow")) {
    let first = document.querySelectorAll(".first");
    let third = document.querySelectorAll(".third");
    first.forEach((p) => {
      p.classList = "active";
    });

    third.forEach((p) => {
      p.classList = "active";
    });
  }
}
