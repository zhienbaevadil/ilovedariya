window.addEventListener("load", () => {
  const photos = document.querySelectorAll(".photo");

  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.add("show");
    }, 200 + index * 350);
  });
});

document.querySelector(".back-btn").addEventListener("click", () => {
  window.location.href = "../page6/index.html";
});
