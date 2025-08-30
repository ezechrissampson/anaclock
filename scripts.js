// Get references to DOM elements
  const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  switchIcon = document.getElementById("switch-icon"),
  modeSwitch = document.querySelector(".mode-switch");

// check if the mode is already set to "Dark Mode" in localStorage
    // Check localStorage on load
    if (localStorage.getItem("mode") === "Dark Mode") {
      body.classList.add("dark");
      switchIcon.src = "icons/pic_bulbon.gif";
    }

    // Toggle on click
    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDarkMode = body.classList.contains("dark");
      switchIcon.src = isDarkMode ? "icons/pic_bulbon.gif" : "icons/pic_bulboff.gif";
      localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    });


 const updateTime = () => {
  // Get current time and calculate degrees for clock hands
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  // Rotate the clock hands to the appropriate degree based on the current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// call updateTime to set clock hands every second
setInterval(updateTime, 1000);

//call updateTime function on page load
updateTime();


    document.addEventListener('DOMContentLoaded', () => {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          document.getElementById('ip').textContent = data.ip || 'N/A';
          document.getElementById('timezone').textContent = data.timezone || 'N/A';
          document.getElementById('country').textContent = data.country_name || 'N/A';
          document.getElementById('org').textContent = data.org || data.asn || 'N/A';
        })
        .catch(err => {
          console.error('Error fetching IP data:', err);
          ['ip','continent','country','region','org'].forEach(id => {
            document.getElementById(id).textContent = 'Error';
          });
        });
    });