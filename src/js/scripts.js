document.addEventListener("DOMContentLoaded", function () {
  const firstBlockHeight = 600;
  const goToUp = document.querySelector(".GoToUp");

  goToUpButton(goToUp, firstBlockHeight);

  window.addEventListener("scroll", function () {
    goToUpButton(goToUp, firstBlockHeight);
  });

  //first bootstrap
  //var windowWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    //windowWidth = window.innerWidth;
    menuResetOnWindowResize();
  });

  document
    .querySelector(".MobileMenu-Button")
    .addEventListener("click", function (event) {
      toggleMobileMenu();
    });

  document
    .querySelector(".MobileMenu-CloseButton")
    .addEventListener("click", function (event) {
      toggleMobileMenu();
    });

  document.querySelector(".ModalWindowBg").addEventListener("click", function(event) {
    if(event.target.classList.contains("ModalWindowBg")) {
      toggleMobileMenu();
    }
  });

  document.querySelector(".vgButton_RecordButton").addEventListener("click", function(event) {
    document.querySelector(".ModalWindowBg").classList.add("ModalWindowBg_Show");
    document.querySelector(".RecordDoctor").classList.add('RecordDoctor_Show');
    document.body.classList.add('MobileMenu_Visible');
  });
});

const toggleMobileMenu = () => {
  //classList.contains
  document.querySelector(".ModalWindowBg").classList.toggle("ModalWindowBg_Show");
  document.querySelector(".vgMenu-Inner").classList.toggle("vgMenu-Inner_Show");
  document.body.classList.toggle('MobileMenu_Visible');
}

// hide mobile menu every resize when mobile menu show
// if .ModalWindowBg already show not hide
const menuResetOnWindowResize = () => {
  if(
    window.getComputedStyle(document.querySelector(".MobileMenu")).display === "block"
    //&& форма записи не видна
  ) {
    document.querySelector(".ModalWindowBg").classList.remove("ModalWindowBg_Show");
    document.querySelector(".vgMenu-Inner").classList.remove("vgMenu-Inner_Show");
    document.body.classList.remove('MobileMenu_Visible');
  }
};

function TopscrollTo() {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 300);
      TopscrollTo();
    }, 20);
  }
}

function goToUpButton(gtu, fbh) {
  if (pageYOffset > fbh) {
    gtu.classList.add("GoToUp_Show");
  } else {
    gtu.classList.remove("GoToUp_Show");
  }
}