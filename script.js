const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// *Note : Months are Zero indexed here, 0-Jan, 1-Feb, ...

const container = document.querySelector(".container");
const title = document.querySelector(".title");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

// const futureDate = new Date(2023, 5, 3, 16, 00, 00); // Test Case
const futureDate = new Date(2024, 0, 1, 00, 00, 00); // New Year

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let weekDay = weekdays[futureDate.getDay()];

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // *Calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //Set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  // What if times passes
  if (t < 0) {
    clearInterval(countdown);
    title.innerHTML = `
            <span><p>HAPPY NEW YEAR</span>
            `;
    container.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2012/02/27/16/13/chinese-17422_1280.jpg')";
    deadline.innerHTML = "";
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
