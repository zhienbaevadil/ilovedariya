const photo = document.getElementById('photo');
const backBtn = document.getElementById('backBtn');
const textBlock = document.getElementById('textBlock');
const heartGif = document.getElementById('heartGif');

let start = null;
const duration = 1200; // анимация прилета фотки

// прилет фотки + кнопки
function flyIn(timestamp) {
  if (!start) start = timestamp;
  const progress = Math.min((timestamp - start) / duration, 1);

  const x = 600 - progress * 600;
  const y = Math.sin(progress * Math.PI) * -20;

  photo.style.transform = `translate(${x}px, ${y}px)`;
  photo.style.opacity = progress;
  backBtn.style.opacity = progress;

  if (progress < 1) {
    requestAnimationFrame(flyIn);
  } else {
    fadeInText();
  }
}

// плавное появление текста и gif
function fadeInText() {
  textBlock.style.opacity = 1;
  heartGif.style.opacity = 1;
}

requestAnimationFrame(flyIn);

function goBack() {
  window.location.href = '../page6/index.html';
}
