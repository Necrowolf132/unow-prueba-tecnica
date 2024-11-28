console.log("cargando");
if (
  document.getElementById("menu-btn") &&
  document.getElementById("mobile-menu")
) {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("main-header")) {
    const header = document.getElementById("main-header");
    const initialClasses =
      "fixed w-full top-0 z-50 transition-all duration-500 ease-in-out bg-transparent";
    const scrolledClasses =
      "fixed max-w-[760px] w-full bg-gray-900 z-50 shadow-lg md:top-[20px] top-[0px] md:rounded-xl left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out";

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.className = scrolledClasses;
      } else {
        header.className = initialClasses;
      }
    });
  }
});
