document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const checkFareBtn = document.getElementById('checkFareBtn');
    const fareMessageDiv = document.getElementById('fareMessage');
    const cityInput = document.getElementById('city');
  
    checkFareBtn.addEventListener('click', function () {
      const city = cityInput.value.trim().toLowerCase();
      let message = '';
      let fareType = '';
  
      if (city === '75000' || city === '75012' || city === 'paris' || city === 'Paris') {
        message = 'Great news! You qualify for our In-City residents fare.';
        fareType = 'in-city';
      } else if (city) {
        message = 'Based on your location, you will have the External visitor fare.';
        fareType = 'external';
      }
  
      if (message) {
        fareMessageDiv.textContent = message;
        fareMessageDiv.className = `fare-message ${fareType}`;
        fareMessageDiv.style.display = 'flex';
      } else {
        fareMessageDiv.style.display = 'none';
      }
    });
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! We will get back to you soon.');
      form.reset();
      fareMessageDiv.style.display = 'none';
    });
  
    cityInput.addEventListener('input', function () {
      fareMessageDiv.style.display = 'none';
    });
  });