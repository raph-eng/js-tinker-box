const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.mins-hand');
const hoursHand = document.querySelector('.hours-hand');

const numbers = document.querySelectorAll('.number');
const radius = 240;

numbers.forEach((number, index) => {
  const angle = ((360 / 12) * (index + 1) - 90) * (Math.PI / 180);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  number.style.transform = `translate(${x}px, ${y}px)`;
});

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

