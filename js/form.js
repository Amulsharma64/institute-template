// form.js

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    var formData = new FormData(this);
  
    // Send form data using Fetch API
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      // Check if submission was successful
      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "https://amulsharma.me";
      } else {
        // Handle error
        console.error('Form submission failed:', response);
      }
    })
    .catch(error => {
      // Handle network errors
      console.error('Error submitting form:', error);
    });
  });
  