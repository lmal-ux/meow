document.querySelectorAll('button').forEach((button) => button.addEventListener('click',()=>{alert('lol')}))
let lastScrollTop = 0;
const header = document.getElementById("header");
const content = document.querySelector(".content");
let isHeaderHidden = false; // Track if the header is hidden

window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop + 10) {
    // Scrolling down (hide the header after moving 10px)
    if (!isHeaderHidden) {
      header.style.transform = "translateY(-100%)";
      content.style.marginTop = "0px";
      isHeaderHidden = true;
    }
  } else if (scrollTop < lastScrollTop - 10) {
    // Scrolling up (show the header after moving up 10px)
    if (isHeaderHidden) {
      header.style.transform = "translateY(0)";
      content.style.marginTop = "80px";
      isHeaderHidden = false;
    }
  }
  
  lastScrollTop = scrollTop;
});