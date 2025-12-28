const puppy = document.getElementById('puppy');

let start = null;
const duration = 1200;

// анимация прилёта
function flyIn(timestamp) {
  if (!start) start = timestamp;
  const progress = Math.min((timestamp - start) / duration, 1);

  const x = -600 + progress * 600;
  const y = Math.sin(progress * Math.PI) * -40;

  puppy.style.transform = `translate(${x}px, ${y}px)`;
  puppy.style.opacity = progress;

  if (progress < 1) {
    requestAnimationFrame(flyIn);
  } else {
    breathe();
  }
}

// мягкое «дыхание» после прилёта
let t = 0;
function breathe() {
  t += 0.03;

  const y = Math.sin(t) * 6;
  const rotate = Math.sin(t / 2) * 1.2;

  puppy.style.transform = `translate(0px, ${y}px) rotate(${rotate}deg)`;

  requestAnimationFrame(breathe);
}

requestAnimationFrame(flyIn);

function goBack() {
  window.location.href = "../page6/index.html";
}