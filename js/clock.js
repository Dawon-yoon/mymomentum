const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const getHour = String(date.getHours()).padStart(2, "0");
  const ampm = parseInt(getHour) >= 12 ? "PM" : "AM"; //조건문 true:false
  const getMiute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${ampm}${getHour}:${getMiute}`;
}
//toLocaleTimeString();->이건 초까지 나와서 안씀.
getClock();
setInterval(getClock, 1000);
