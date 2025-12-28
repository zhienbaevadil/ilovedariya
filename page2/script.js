function goAccept() {
  window.location.href = "../page4/index.html"; // переход на Page 4
}

function goReject() {
  window.location.href = "../page3/index.html"; // переход на Page 3 (wrong choice)
}
document.addEventListener('DOMContentLoaded', () => {
  const cat = document.querySelector('.big-cat');

  // ставим начальную позицию
  cat.style.transform = 'translateX(600px) translateY(-50px) scale(0.5)';
  cat.style.opacity = '0';

  // небольшая задержка, чтобы браузер отрендерил стартовое состояние
  requestAnimationFrame(() => {
    cat.style.transition = 'transform 0.770s ease-out, opacity 1.2s ease-out';
    cat.style.transform = 'translateX(0px) translateY(0px) scale(1)';
    cat.style.opacity = '1';
  });
});
