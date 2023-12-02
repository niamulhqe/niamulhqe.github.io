function displayDhakaTime() {
  const options = {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const dhakaTime = new Date().toLocaleTimeString('en-US', options);
  document.getElementById('dhakaTime').textContent = `${dhakaTime}`;
}

setInterval(displayDhakaTime, 1000);

displayDhakaTime();


function displayDhakaCurrentDate() {
  const options = {
    timeZone: 'Asia/Dhaka',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const year = currentDate.toLocaleDateString('en-US', { year: 'numeric' });

  const formattedDate = `${day} ${month}, ${year}`;

  document.getElementById('dhakaCurrentDate').textContent = `${formattedDate}`;
}

// Displaying the custom formatted date for Dhaka
displayDhakaCurrentDate();
