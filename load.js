const header = document.querySelector(".header");
const hideDiv = document.querySelector(".hide");

let lastScrollY = window.scrollY;

// Ensure `.hide` matches header height dynamically
const setHideHeight = () => {
  if (header && hideDiv) {
    hideDiv.style.height = `${header.offsetHeight}px`;
  }
};

const updateHeader = () => {
  if (!header || !hideDiv) return;
  
  const hideRect = hideDiv.getBoundingClientRect();
  let visibleHeight = Math.max(0, hideRect.bottom); // How much of `.hide` is visible
  
  const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";
  lastScrollY = window.scrollY;
  
  if (scrollDirection === "down") {
    // Hide the header gradually as `.hide` disappears
    header.style.transform = `translateY(${-Math.min(header.offsetHeight, header.offsetHeight - visibleHeight)}px)`;
  } else {
    // Show header back based on scroll up amount
    header.style.transform = `translateY(0)`;
  }
};

// Run once to set the `.hide` height correctly
window.addEventListener("DOMContentLoaded", setHideHeight);
window.addEventListener("resize", setHideHeight);
window.addEventListener("scroll", updateHeader);