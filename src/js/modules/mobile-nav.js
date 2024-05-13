function mobileNav() {
  function closeNav() {
    nav.classList.remove("mobile-nav--open");
    menuIcon.classList.remove("nav-icon--active");
    document.body.classList.remove("no-scroll");

    // Збереження стану ховера при закритті меню
    const hoveredSpan = document.querySelector(".mobile__nav-item .hovered-span");
    if (hoveredSpan) {
      hoveredSpan.classList.remove("hovered-span");
    }
  }

  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");

  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  };

  const navLinks = document.querySelectorAll(".mobile-nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();

      // Зняти колір тексту з усіх лінків
      navLinks.forEach(function (otherLink) {
        otherLink.style.color = "";
      });

      // Змінюємо колір тексту лінка на чорний при кліку
      link.style.color = "#000";

      // Додаємо класи для ховера на span при кліку на лінк
      const parentNavItem = link.closest(".mobile__nav-item");
      const span = parentNavItem.querySelector("span");
      span.classList.add("hovered-span");
    });
  });
}

export default mobileNav;
