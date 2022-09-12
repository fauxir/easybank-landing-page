const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const shadow = document.querySelector(".shadow");
const homeUnderLine = document.querySelector(".underline-home");
const aboutUnderLine = document.querySelector(".underline-about");
const contactUnderLine = document.querySelector(".underline-contact");
const blogUnderLine = document.querySelector(".underline-blog");
const careersUnderLine = document.querySelector(".underline-careers");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menu.style.opacity = "0";
    shadow.style.display = "none";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menu.style.opacity = "1";
    shadow.style.display = "block";
    shadow.style.transform = "translateY(0)";
  }
}

hamburger.addEventListener("click", toggleMenu);

const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

  function underlineHome(){
    homeUnderLine.style.display = "inline";
  }

  function removeUnderlineHome(){
    homeUnderLine.style.display = "none";
  }

  function underlineAbout(){
    aboutUnderLine.style.display = "inline";
  }

  function removeUnderlineAbout(){
    aboutUnderLine.style.display = "none";
  }

  function underlineContact(){
    contactUnderLine.style.display = "inline";
  }

  function removeUnderlineContact(){
    contactUnderLine.style.display = "none";
  }

  function underlineBlog(){
    blogUnderLine.style.display = "inline";
  }

  function removeUnderlineBlog(){
    blogUnderLine.style.display = "none";
  }

  function underlineCareers(){
    careersUnderLine.style.display = "inline";
  }

  function removeUnderlineCareers(){
    careersUnderLine.style.display = "none";
  }