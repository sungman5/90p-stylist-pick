/** @format */

// header slide
const slideImage = document.querySelectorAll(".sp-list-item");
const slideWrapper = document.querySelector(".sp-slide-list");
const firstImage = document.getElementById("sp-list-first-item");

function slideAction() {
  slideWrapper.style.transform = `translateX(-${firstImage.clientWidth * 6}px)`;
  slideWrapper.style.transition = "all 20s ";
  setTimeout(() => {
    slideWrapper.style.transform = "translateX(0)";
    slideWrapper.style.transition = "none";

    setTimeout(slideAction, 0);
  }, 20000);
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

// ㄴㄴ
function crew_1_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-slide-sample");
  const secondSlideItem = document.querySelector("#crew-slide-sample-2");
  const thirdSlideItem = document.querySelector("#crew-slide-sample-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-1-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}

function crew_2_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-2-slide-1");
  const secondSlideItem = document.querySelector("#crew-2-slide-2");
  const thirdSlideItem = document.querySelector("#crew-2-slide-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-2-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}
function crew_3_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-3-slide-1");
  const secondSlideItem = document.querySelector("#crew-3-slide-2");
  const thirdSlideItem = document.querySelector("#crew-3-slide-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-3-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}

function crew_4_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-4-slide-1");
  const secondSlideItem = document.querySelector("#crew-4-slide-2");
  const thirdSlideItem = document.querySelector("#crew-4-slide-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-4-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}

function crew_5_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-5-slide-1");
  const secondSlideItem = document.querySelector("#crew-5-slide-2");
  const thirdSlideItem = document.querySelector("#crew-5-slide-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-5-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}

function crew_6_Slide() {
  let slideNum = 0;
  const firstSlideItem = document.querySelector("#crew-6-slide-1");
  const secondSlideItem = document.querySelector("#crew-6-slide-2");
  const thirdSlideItem = document.querySelector("#crew-6-slide-3");
  const allSlideItems = document.querySelectorAll(".sp-crew-6-slide-item");
  let slideTimeout; // setTimeout을 관리하기 위한 변수

  function hiddenAllItems() {
    allSlideItems.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  function setupVideoEndListener(videoElement) {
    // 비디오 재생이 끝나면 호출될 함수를 한 번만 등록합니다.
    videoElement.onended =
      videoElement.onended ||
      (() => {
        console.log("비디오 끝!");
        slideNum++;
        playSlide(); // 비디오 재생이 끝나면 다음 슬라이드로 넘어갑니다.
      });
  }

  function playSlide() {
    clearTimeout(slideTimeout); // 이전에 설정된 타이머가 있으면 취소합니다.
    hiddenAllItems();

    let delay = 2000; // 기본 지연 시간 설정

    if (slideNum === 0) {
      firstSlideItem.style.opacity = 1;
      slideNum++;
    } else if (slideNum === 1) {
      secondSlideItem.style.opacity = 1;
      if (secondSlideItem.tagName === "VIDEO") {
        setupVideoEndListener(secondSlideItem); // 비디오에 대한 종료 이벤트 리스너 설정
        secondSlideItem.play();
        console.log("비디오 시작!");
        return; // 비디오가 재생되는 동안 다음 슬라이드로 자동으로 넘어가지 않도록 합니다.
      } else {
        slideNum++;
      }
    } else if (slideNum === 2) {
      thirdSlideItem.style.opacity = 1;
      slideNum = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아갑니다.
    }

    // 다음 슬라이드로 넘어가기 전에 설정한 지연 시간 후에 playSlide 함수를 다시 호출합니다.
    slideTimeout = setTimeout(playSlide, delay);
  }

  playSlide(); // 슬라이드쇼 시작
}




crew_1_Slide();
crew_2_Slide();
crew_3_Slide();
crew_4_Slide();
crew_5_Slide();
crew_6_Slide();