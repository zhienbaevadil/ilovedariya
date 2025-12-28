function openGift(url) {
  window.location.href = url;
}

// Колебания через JS
const gifts = document.querySelectorAll('.gift');

gifts.forEach((gift) => {
  // задаём случайные начальные позиции
  let offsetX = Math.random() * 10 - 5;
  let offsetY = Math.random() * 10 - 5;
  let angle = Math.random() * 4 - 2;
  let speedX = (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
  let speedY = (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
  let speedAngle = (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1);

  function animate() {
    offsetX += speedX;
    offsetY += speedY;
    angle += speedAngle;

    // лимит движения ±10px и ±5deg
    if (offsetX > 20 || offsetX < -20) speedX *= -1;
    if (offsetY > 20 || offsetY < -20) speedY *= -1;
    if (angle > 10 || angle < -10) speedAngle *= -1;

    gift.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${angle}deg)`;
    requestAnimationFrame(animate);
  }

  animate();
});
