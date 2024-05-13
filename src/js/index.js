import mobileNav from "./modules/mobile-nav.js";
mobileNav();

//========================================================================================================================================================
// #region reveal
window.sr = ScrollReveal();
sr.reveal(".agency__title-box", {
  delay: 500,
  duration: 2000,
  origin: "bottom",
  distance: "20px"
});
sr.reveal(".text-scroll1", {
  delay: 1000,
  duration: 2000,
  origin: "left",
  distance: "50px"
});
sr.reveal(".text-scroll2", {
  delay: 1500,
  duration: 2000,
  origin: "right",
  distance: "50px"
});

sr.reveal(".projects__title", {
  duration: 500,
  origin: "bottom",
  distance: "100px"
});
sr.reveal(".projects__content-title", {
  duration: 500,
  origin: "left",
  distance: "100px"
});
sr.reveal(".projects__content-text", {
  duration: 500,
  origin: "right",
  distance: "100px"
});
sr.reveal(".questions__title", {
  duration: 2500,
  origin: "bottom",
  distance: "200px"
});
sr.reveal(".questions__inner-box", {
  duration: 2000,
  origin: "right",
  distance: "500px"
});
sr.reveal(".questions__inner-box.admin", {
  duration: 2000,
  origin: "left",
  distance: "500px"
});
sr.reveal(".process__title", {
  duration: 1500,
  origin: "left",
  distance: "500px"
});
sr.reveal(".process__text", {
  duration: 2500,
  origin: "right",
  distance: "500px"
});
sr.reveal(".block__title1", {
  duration: 1500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".block__title", {
  duration: 1500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".block__dot1", {
  duration: 1500
});
sr.reveal(".block__dot", {
  duration: 1500
});
sr.reveal(".block__dot2", {
  duration: 1500
});
sr.reveal(".block__text", {
  duration: 1500,
  origin: "right",
  distance: "200px"
});
sr.reveal(".about__title.top", {
  duration: 1500,
  origin: "right",
  distance: "200px"
});
sr.reveal(".about__title.bot", {
  duration: 1500,
  origin: "left",
  distance: "200px"
});

sr.reveal(".left__box-title", {
  duration: 1500,
  origin: "bottom",
  distance: "100px"
});
sr.reveal(".left__box-text", {
  duration: 1500,
  origin: "bottom",
  distance: "100px"
});
sr.reveal(".right__text", {
  duration: 1500,
  origin: "bottom",
  distance: "100px"
});
sr.reveal(".about-absolute__text", {
  duration: 1500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".best__title-box", {
  duration: 1500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".best__box.hour", {
  duration: 2500,
  origin: "right",
  distance: "200px"
});
sr.reveal(".best__box.price", {
  duration: 2500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".best__box.speed", {
  duration: 2500,
  origin: "bottom",
  distance: "200px"
});
sr.reveal(".best__box.create", {
  duration: 2500,
  origin: "left",
  distance: "200px"
});
sr.reveal(".best__box.button", {
  duration: 2500,
  origin: "right",
  distance: "200px"
});
sr.reveal(".best__box.clients", {
  duration: 2500,
  origin: "bottom",
  distance: "200px"
});
sr.reveal(".form__title-box", {
  duration: 2500,
  origin: "bottom",
  distance: "200px"
});
sr.reveal(".form__box", {
  duration: 2500,
  origin: "top",
  distance: "200px"
});
// #endregion
//========================================================================================================================================================

const cards = document.querySelectorAll(".project");
const wrapper = document.querySelector(".project__inner");

function updateCardPositions() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  cards.forEach((card, index) => {
    const cardPosition = scrollPosition - wrapper.offsetTop - index * windowHeight * 0.5;

    if (cardPosition < windowHeight) {
      card.style.transform = "scale(1)";
    } else {
      card.style.transform = "scale(0.8)";
    }
  });
}
window.addEventListener("scroll", updateCardPositions);
updateCardPositions();

//========================================================================================================================================================
//form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzYAnWXAokkh2HLzXQWs58PaGtGdG6ra-5VgPZOObc_2JZkVCR9bHF8oAAff88Eo899zQ/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Дякуємо за заявку, ми невдовзі з Вами зв'яжемося.",
        showConfirmButton: false,
        timer: 3500
      });
    })
    .catch((error) => console.error("Error!", error.message));
});
