window.addEventListener("load", () => {
  const cat = document.querySelector(".cat");

  cat.animate(
    [
      {
        transform: "translate(-400px, -200px) rotate(-10deg)",
        opacity: 0
      },
      {
        transform: "translate(-150px, 80px) rotate(6deg)",
        opacity: 1
      },
      {
        transform: "translate(0, 0) rotate(0deg)",
        opacity: 1
      }
    ],
    {
      duration: 1200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards"
    }
  );
});

document.getElementById("noBtn").addEventListener("click", () => {
  window.location.href = "../page3/index.html";
});

document.getElementById("yesBtn").addEventListener("click", () => {
  window.location.href = "../page5/index.html";
});
