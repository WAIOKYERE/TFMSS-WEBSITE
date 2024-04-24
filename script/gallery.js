document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const previewContainer = document.querySelector(".preview-container");
  const previewImage = document.querySelector(".preview-image");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  // Show preview container with clicked image
  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", function () {
          currentIndex = index;
          showImage(index);
      });
  });

  // Show image in preview container
  function showImage(index) {
      const imgSrc = thumbnails[index].src;
      previewImage.src = imgSrc;
      previewContainer.style.display = "block";
  }

  // Close preview container
  closeBtn.addEventListener("click", function () {
      previewContainer.style.display = "none";
  });

  // Navigate to previous image
  prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      showImage(currentIndex);
  });

  // Navigate to next image
  nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      showImage(currentIndex);
  });

  // Handle keyboard arrow keys
  document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
          prevBtn.click();
      } else if (e.key === "ArrowRight") {
          nextBtn.click();
      } else if (e.key === "Escape") {
          closeBtn.click();
      }
  });
});






let slideIndex = 1;
showSlides(slideIndex);

// Next/  controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}