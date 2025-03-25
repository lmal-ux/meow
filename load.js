document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;
  let headerHeight = header.offsetHeight;
  let hiddenHeight = 0; // Tracks how much of the header is hidden
  
  window.addEventListener("scroll", function() {
    let currentScrollY = window.scrollY;
    let scrollDelta = currentScrollY - lastScrollY; // Positive when scrolling down, negative when up
    
    if (scrollDelta > 0) {
      // Scrolling Down → Hide Header
      hiddenHeight = Math.min(hiddenHeight + scrollDelta, headerHeight);
    } else {
      // Scrolling Up → Show Header
      hiddenHeight = Math.max(hiddenHeight + scrollDelta, 0);
    }
    
    header.style.top = `-${hiddenHeight}px`;
    
    lastScrollY = currentScrollY;
  });
});