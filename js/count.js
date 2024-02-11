  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.purecounter');
    counters.forEach(counter => {
      const start = parseInt(counter.getAttribute('data-purecounter-start'));
      const end = parseInt(counter.getAttribute('data-purecounter-end'));
      const duration = parseInt(counter.getAttribute('data-purecounter-duration'));
      
      let current = start;
      
      const updateCounter = () => {
        const increment = end / (duration * 60); // assuming 60 frames per second
        if (current < end) {
          current += increment;
          counter.innerText = Math.ceil(current);
          setTimeout(updateCounter, 1000 / 60);
        } else {
          counter.innerText = end;
        }
      };
      
      updateCounter();
    });
  });