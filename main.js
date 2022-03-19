// Navigation Menu Scripts
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const backDrop = document.getElementById('backDrop');
const navItems = document.querySelectorAll('.nav-item');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navList.classList.toggle('active');
  backDrop.classList.toggle('active');

  if(backDrop.classList.contains('active')){
    backDrop.addEventListener('click', () => {
      navList.classList.remove('active');
      menuBtn.classList.remove('active');
      backDrop.classList.remove('active');
    });
  }

  else {
    backDrop.addEventListener('click', () => {
      navList.classList.add('active');
      menuBtn.classList.add('active');
      backDrop.classList.add('active');
    });
  }  
});


// Countdown Timer Scripts
var launchDate = new Date("Dec 31, 2022 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var duration = launchDate - now;

  var days = Math.floor(duration / (1000 * 60 * 60 * 24));
  var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((duration % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  if (duration < 0) {
    clearInterval(x);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }

  function formatTime(time){
     return time < 10 ? (`0${time}`) : time;
  }
}, 1000);


// Dark Mode Scripts
let wholePage = document.querySelector("body");
let activator = document.getElementById('activator');
let activatorImg = document.getElementById('activatorImg');

activator.addEventListener('click', function() {
  wholePage.classList.toggle('dark-mode');

  if (wholePage.classList.contains('dark-mode')){
    activatorImg.src = "assets/images/sun.png";
  }
  else {
    activatorImg.src = "assets/images/moon.png";
  }
});


window.onscroll = function () {
  document.querySelector('header').classList.add('header-active');
  if (window.scrollY <= 0) {
    document.querySelector('header').classList.remove('header-active');
  } else {
    document.querySelector('header').classList.add('header-active');
  }
}



