// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-up');
    
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  }
  
  // Initial setup
  document.addEventListener('DOMContentLoaded', () => {
    handleScroll(); // Check if elements are in viewport on page load
    window.addEventListener('scroll', handleScroll);
  });
  

// Wait for the page to fully load before hiding the preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('#loader-wrapper');
  
  // Hide the preloader
  preloader.style.display = 'none';
});