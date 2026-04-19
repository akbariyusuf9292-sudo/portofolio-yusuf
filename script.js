const elements = document.querySelectorAll(".fade");
const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");

// ANIMASI SCROLL
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });

  // NAVBAR CHANGE
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // BUTTON TOP
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// BACK TO TOP CLICK
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// MODAL PROJECT
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.innerText = card.querySelector("h3").innerText;
    modalDesc.innerText = card.querySelector("p").innerText;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};