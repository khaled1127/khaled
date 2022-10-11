// chanaga --main-color in page  localStorage

let mainColors = localStorage.getItem("color_option");
// console.log(mainColors);

if (mainColors !== null) {
  // console.log("value localestorage");
  document.documentElement.style.setProperty("--main-color", mainColors);
  // remove active class from all color list item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // add active class on element
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}
// chanage to color page
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(function (li) {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    handedlActive(e);
  });
});

// random Background option
let backgroundoption = true;

// varible to control the interval
let backgroundinterval;

// chack if local stroge random background item
let backgroudlocalitem = localStorage.getItem("background_obtion");

if (backgroudlocalitem !== null) {
  // console.log(backgroudlocalitem);
  // console.log(typeof backgroudlocalitem);
  if (backgroudlocalitem === "true") {
    backgroundoption = true;
  } else {
    backgroundoption = false;
  }
  // console.log(backgroudlocalitem);
  // remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  // console.log(backgroudlocalitem);
  if (backgroudlocalitem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
    console.log(backgroudlocalitem);
  }
  // console.log(backgroudlocalitem);
}
// chanage to color page randem option
const randBackEle = document.querySelectorAll(".random-backgrounds span");

randBackEle.forEach(function (span) {
  span.addEventListener("click", function (e) {
    handedlActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundoption = true;
      // console.log(backgroundoption);
      randomizeImgs();
      localStorage.setItem("background_obtion", true);
    } else {
      backgroundoption = false;
      // console.log(backgroundoption);
      clearInterval(backgroundinterval);
      localStorage.setItem("background_obtion", false);
    }
  });
});

// select landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get array of images

let imgesArray = [
  "img(0).jpg",
  "img(1).jpg",
  "img(2).jpg",
  "img(3).jpg",
  "img(4).jpg",
  "img(5).jpg",
];

// function to randomize imgs
function randomizeImgs() {
  if (backgroundoption === true) {
    backgroundinterval = setInterval(function () {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgesArray.length);

      // changa backgroundImage url
      landingPage.style.backgroundImage =
        'url("image/' + imgesArray[randomNumber] + '")';
    }, 10000);
  }
}

randomizeImgs();

document.querySelector(".toggle-setting .box-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};

// select skills select
let ourSkills = document.querySelector(".skills");
let spanSkills = document.querySelectorAll(".skills  span ");
console.log(spanSkills);
// window.onscroll = function () {
//   if (window.scrollY >= ourSkills.offsetTop) {
//     // console.log("وصلت");
//     spanSkills.forEach((span) => {
//       this.style.Width = this.dataset.progress;
//     });
//   }
// };
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop) {
    console.log("Reached Section Three");
    spanSkills.forEach(function (span) {
      console.log(span);
      span.style.width = span.dataset.progress;
    });
  }
};

// creat popup with the image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creat overlay element
    let overlay = document.createElement("div");

    // add class to overlay
    overlay.className = "popup-overlay";

    // append overlay to the body
    document.body.appendChild(overlay);

    // creat the popup
    let popupBox = document.createElement("div");

    // add class to the popup box
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      // creat heading
      let imgHeading = document.createElement("h3");

      let imgText = document.createTextNode(img.alt);

      // append the text to heading
      imgHeading.appendChild(imgText);

      // appand the heading to the popup popup Box
      popupBox.appendChild(imgHeading);
    }

    // creat the image
    let popupImage = document.createElement("img");

    // set image source
    popupImage.src = img.src;

    // add imge to popup box

    popupBox.appendChild(popupImage);

    // append the popup box body
    document.body.appendChild(popupBox);

    // creat the close span
    let colseButton = document.createElement("span");

    // creat the close button text
    let closeButtonText = document.createTextNode("X");

    // append the closeButtonText to colseButton
    colseButton.appendChild(closeButtonText);

    // add class  claose Button
    colseButton.className = "close-button";
    // append colseButton to popupBox
    popupBox.appendChild(colseButton);
  });
});

// close popup
document.addEventListener("click", function (e) {
  if (e.target.className === "close-button") {
    // remove The current popup
    e.target.parentNode.remove();
    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// select all Bulets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks = document.querySelectorAll(".Links a");

function scrollTosomewhere(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault(); // المنع الافتراضى وده بتوقف عمل الينك مش بتخلى يخرج بره الصفحه

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollTosomewhere(allBullets);
scrollTosomewhere(allLinks);

// handedl active state
function handedlActive(event) {
  // remove  active class from all chidrens
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}

// select show bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");

//
let bulletsContainer = document.querySelector(".nav-bullets");
//
let bulletsLocalItem = localStorage.getItem("bullets_option");
if (bulletsLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletsLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}
//
//
bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      // console.log("blook");
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
      // console.log("nona");
    }
    handedlActive(e);
  });
});

// reset button
document.querySelector(".reset-options").onclick = function () {
  // هنا بيعمل مشكله ان لو مخزن اى قيمه تانيه هو هيشيلها مع 3 خواص اللى انا عاوز اشيلهم
  localStorage.clear();

  // localStorage.removeItem("color_option");
  // localStorage.removeItem("background_obtion");
  // localStorage.removeItem("bullets_option");
  // هنا انا بقول اعمل اعادة تحميل للموقع بعد ام اشغط ع الزررار
  window.location.reload();
};

// TOGGLE MENU

let togglebtn = document.querySelector(".toggle-menu");
let tliks = document.querySelector(".Links");
togglebtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tliks.classList.toggle("open");
};

// click anywhere outside menu add toggle button
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target !== togglebtn && e.target !== tliks) {
    if (tliks.classList.contains("open")) {
      togglebtn.classList.toggle("menu-active");
      tliks.classList.toggle("open");
    }
  }
});
tliks.onclick = function (e) {
  e.stopPropagation();
};
