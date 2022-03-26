const myClock = document.getElementById("myClock");
const myName = document.getElementById("myName");


function showTime() {
  let today = new Date()
  let hour = today.getHours()
  let min = today.getMinutes()
  let sec = today.getSeconds()
  let day = today.getDay()

  switch (day) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  };
  function check(i){
    if(i<10) i = "0" +i;
    return i;
  }
  hour = check(hour);
  min = check(min);
  sec = check (sec);

  myClock.innerHTML =`${hour}:${min}:${sec} ${day}`

 
}
setInterval(showTime,500);
let fullName = prompt("Lütfen Adınızı Giriniz:")
capitalizeFullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
if(fullName.length === 0){
  myName.innerHTML = "Guest"
}
else{
  myName.innerHTML = capitalizeFullName
}

