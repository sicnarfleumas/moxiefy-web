const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Function to close the mobile navigation
function closeMobileNav() {
  primaryNav.removeAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", false);
  primaryHeader.removeAttribute("data-overlay");
}

// Event listener for the toggle button
navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    closeMobileNav();
  } else {
    navToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", "");
    primaryHeader.setAttribute("data-overlay", "");
  }
});

// Event listeners for navigation items to close the mobile nav when clicked
const navItems = primaryNav.querySelectorAll("a"); // Change "a" to the selector for your navigation items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMobileNav();
  });
});
