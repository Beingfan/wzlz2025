const close = document.querySelector(".click__close");
const model = document.querySelector(".section__model");
const hours__one = document.querySelector(".hours__one");
const hours__two = document.querySelector(".hours__two");
const minute__one = document.querySelector(".minute__one");
const minute__two = document.querySelector(".minute__two");
const second__one = document.querySelector(".second__one");
const second__two = document.querySelector(".second__two");
const buttons = document.querySelectorAll(".section__button");
const classArr = ["one", "two", "three"];
let time = null;

function handlerClick() {
  fbq("track", "AddToCart");
  fbq('track', 'ViewContent');
  fbq('track', 'CompleteRegistration');
  fbq('track', 'Lead');
  window.open("https://lihi3.cc/Yt2eB");
}
buttons.forEach((v) => {
  v.onclick = handlerClick;
});

setTimeout(function () {
  model.style.display = "flex";
}, 3000);

close.onclick = function () {
  model.style.display = "none";
};
function resetTime(timeStamp) {
  var timer = null;
  var t = timeStamp;
  var h = 0;
  var m = 0;
  var s = 0;
  h = Math.floor(t / 3600);
  h < 10 && (h = "0" + h);
  m = Math.floor((t / 60) % 60);
  m < 10 && (m = "0" + m);
  s = Math.floor(t % 60);
  //开启定时任务
  timer = setInterval(countDown, 1000);
  function countDown() {
    timeStamp--;
    s--;
    if (timeStamp < 0) {
      resetTime(7200);
    } else {
      localStorage.setItem("time_start", timeStamp);
    }
    s < 10 && (s = "0" + s);
    if (s.length >= 3) {
      s = 59;
      m = Number(m) - 1;
      m < 10 && (m = "0" + m);
    }
    if (m.length >= 3) {
      m = 59;
      h = Number(h) - 1;
      h < 10 && (h = "0" + h);
    }
    if (h.length >= 3) {
      h = "00";
      m = "00";
      s = "00";
      //倒计时结束,关闭定时任务。
      clearInterval(timer);
    }
    hours__one.innerHTML = parseInt(h / 10) % 10;
    hours__two.innerHTML = h % 10;
    minute__one.innerHTML = parseInt(m / 10) % 10;
    minute__two.innerHTML = m % 10;
    second__one.innerHTML = parseInt(s / 10) % 10;
    second__two.innerHTML = s % 10;
  }
}
const time_start = localStorage.getItem("time_start");
resetTime(time_start);
