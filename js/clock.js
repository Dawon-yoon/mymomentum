const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const getHour = date.getHours();
  const ampm = getHour >= 12 ? "PM" : "AM"; //조건문 참:거짓
  clock.innerText = `${ampm} ${getHour}:${date.getMinutes()}`;
}

getClock();
setInterval(getClock, 1000);
