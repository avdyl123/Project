document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const bookingData = { checkIn, checkOut, guests, name, email };

   
    fetch('http://localhost:8080/booking/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').innerText = "Booking confirmed!";
    })
    .catch(error => {
        document.getElementById('response-message').innerText = "Error: Please try again.";
    });
});
