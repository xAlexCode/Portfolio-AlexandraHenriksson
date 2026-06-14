export function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger") as HTMLElement;
  const leftSide = document.querySelector(".leftSide") as HTMLElement;
  const navLinks = document.querySelectorAll(".sidebarNav a");

  // Öppna/stäng meny
  hamburger.addEventListener("click", () => {
    leftSide.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // Stäng meny när man klickar på en länk
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      leftSide.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

  // Stäng meny när man klickar utanför
  document.addEventListener("click", (e) => {
    const target = e.target as Node;

    const clickedInsideMenu = leftSide.contains(target);
    const clickedHamburger = hamburger.contains(target);

    if (!clickedInsideMenu && !clickedHamburger) {
      leftSide.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });

  // Stäng meny när man går från mobil → tablet
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      leftSide.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
}
