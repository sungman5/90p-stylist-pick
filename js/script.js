/** @format */

// header slide
const slideImage = document.querySelectorAll(".sp-list-item");
const slideWrapper = document.querySelector(".sp-slide-list");
const firstImage = document.getElementById("sp-list-first-item");

function slideAction() {
  slideWrapper.style.transform = `translateX(-${firstImage.clientWidth * 6}px)`;
  slideWrapper.style.transition = "all 40s";
  setTimeout(() => {
    slideWrapper.style.transform = "translateX(0)";
    slideWrapper.style.transition = "none";

    setTimeout(slideAction, 0);
  }, 40000);
}

// 초기 애니메이션 시작
slideAction();

// set crew slide height
let crewImageSampleHeight = 0;
const spCrewSlideHeight = document.querySelectorAll(".sp-crew-slide");
const crewImageSample = document.getElementById("crew-slide-sample");

function setCrewSlideHeight() {
  crewImageSampleHeight = crewImageSample.clientHeight;
  console.log(crewImageSampleHeight);
  for (let i = 0; i < spCrewSlideHeight.length; i++) {
    spCrewSlideHeight[i].style.height = `${crewImageSampleHeight}px`;
  }
}

window.onload = setCrewSlideHeight;

window.addEventListener("resize", () => {
  setCrewSlideHeight();
});

// crew slide show
let slideNum = 0;
const firstSlideImg = document.querySelectorAll(".sp-crew-slide-item-first");
const secondSlideImg = document.querySelectorAll(".sp-crew-slide-item-second");
const thirdSlideImg = document.querySelectorAll(".sp-crew-slide-item-third");

function slideTimer() {
  hideAllSlides();
  if (slideNum === 0) {
    for (let i = 0; i < firstSlideImg.length; i++) {
      firstSlideImg[i].style.opacity = 1;
    }
  } else if (slideNum === 1) {
    for (let i = 0; i < secondSlideImg.length; i++) {
      secondSlideImg[i].style.opacity = 1;
    }
  } else if (slideNum === 2) {
    for (let i = 0; i < thirdSlideImg.length; i++) {
      thirdSlideImg[i].style.opacity = 1;
    }
  }
  slideNum = (slideNum + 1) % 3;
}

function hideAllSlides() {
  [firstSlideImg, secondSlideImg, thirdSlideImg].forEach(group => {
    for (let i = 0; i < group.length; i++) {
      group[i].style.opacity = 0;
    }
  });
}

setInterval(slideTimer, 3500); // 2초마다 slideTimer 함수를 호출하여 슬라이드를 전환합니다.
