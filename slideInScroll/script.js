function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let sliderImages = document.querySelectorAll(".slide-in");

function checkSlider(e) {
  sliderImages.forEach((sliderImage) => {
    let slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    let imageBottom = sliderImage.offsetTop + sliderImage.height;
    let isHalfShown = slideInAt > sliderImage.offsetTop;
    let isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlider));
