 // Function to scroll to the top of the page
 function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide the scroll to top button based on scroll position
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
  }

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

// Set the width of each slide to fit within the carousel container
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide) => {
  slide.style.width = slideWidth + 'px';
});

// Function to move the slides
const moveToSlide = (track, targetSlide) => {
  const currentIndex = slides.indexOf(targetSlide);
  const newPosition = -slideWidth * currentIndex;
  track.style.transform = 'translateX(' + newPosition + 'px)';
};

// Auto Swipe functionality
let currentIndex = 0;
const nextSlide = () => {
  const nextIndex = currentIndex + 1;
  if (nextIndex < slides.length) {
    moveToSlide(track, slides[nextIndex]);
    currentIndex = nextIndex;
  } else {
    // If at end, loop back to the start
    moveToSlide(track, slides[0]);
    currentIndex = 0;
  }
};

// Set interval for auto swipe
const intervalTime = 1000; // Adjust as needed (milliseconds)
setInterval(nextSlide, intervalTime);
