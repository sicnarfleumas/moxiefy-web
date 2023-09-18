const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
    primaryNav.removeAttribute("data-visible"); // Remove the data-visible attribute to hide the navigation menu
    primaryHeader.removeAttribute("data-overlay"); // Remove the data-overlay attribute to hide the overlay
  } else {
    navToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", ""); // Add the data-visible attribute to show the navigation menu
    primaryHeader.setAttribute("data-overlay", ""); // Add the data-overlay attribute to show the overlay
  }
});
