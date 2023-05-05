// exercise I
// Make a clone of the image in the main-content
// (where it says Exercise I) and put it inside the sidebar.
// See how it's supposed to look like on the screenshot.
const imageClone = document.querySelector(".img-clone").innerHTML;
const sidebar = document.querySelector(".sidebar");
sidebar.innerHTML += imageClone;

// exercise II
// There's an array of tags below.
// Inside the index.html you will
// find the section where it says Exercise II,
// there is a div with a class of '.widget-sidebar-tags'.
// Iterate through the tags and show them as buttons with
// the following html structure
// (<a href="#" class="btn btn-outline-secondary btn-sm mr-2 mb-2">Books</a>)
// inside the '.widget-sidebar-tags' div. See the screenshot
// how they are supposed to look like.
let tags = [
  "Books",
  "Presentation",
  "Study",
  "Blog",
  "Teachers",
  "Courses",
  "Student Life",
  "Test",
  "Certifications",
  "Images",
  "Recent",
];

const widgetBar = document.querySelector(".widget-sidebar-tags");
// const ul = document.createElement("ul");
// ul.style.display = "flex";
// ul.style.listStyleType = "none";
// ul.style.flexWrap = "wrap";
// ul.style.paddingLeft = "0";

for (let i = 0; i < tags.length; i++) {
  // const li = document.createElement("li");
  widgetBar.innerHTML += `<a href="#" 
                     class="btn btn-outline-secondary
                     btn-sm mr-2 mb-2">${tags[i]}</a>
                     `;
  // ul.appendChild(li);
}

// widgetBar.appendChild(ul);

// exercise III
// In the first sidebar widget (that's already done) there are bunch of links
// and in the main-content there is a main-content-widget that is hidden
// (display: none), where it says Exercise III. Get every odd link (1/3/5)
// and place that same link as a child of the main-content-widget,
// don't re-create it from scratch (hint: innerHTML).
// After inserting all the links as children, show the main-content-widget
// on the page (display: block)

const mainWidget = document.querySelector(".main-content-widget");
const postsContent = document.querySelector(".posts-cont");
let posts = document.querySelectorAll(".link-block");
mainWidget.style.display = "block";

for (let i = 0; i < posts.length; i += 2) {
  // if (i % 2 === 0) {
  postsContent.innerHTML += posts[i].innerHTML;
  // }
}

// exercise IV
// You are given an array of images. In html there is a carousel
// that is hidden (display: none), where it says Exercise IV.
// The carousel has no carousel-items inside the carousel-inner div.
// Your task is to iterate through the array of images and for every
// image create a new slide in the carousel. Make sure you put the active
// class on the first one only in order to make the carousel work properly.
// After inserting all the images as carousel slides show the carousel
// on the page (display: block).
let imgsArr = [
  "https://picsum.photos/id/1044/1280/720",
  "https://picsum.photos/id/1040/1280/720",
  "https://picsum.photos/id/1041/1280/720",
  "https://picsum.photos/id/1042/1280/720",
];

const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
carousel.style.display = "block";

for (let i = 0; i < imgsArr.length; i++) {
  if (i === 0) {
    carouselInner.innerHTML += `<div class="carousel-item active">
    <img class="d-block w-100" src=${imgsArr[i]} alt="First slide">
    </div>`;
  } else {
    carouselInner.innerHTML += `<div class="carousel-item">
    <img class="d-block w-100" src=${imgsArr[i]} alt="First slide">
    </div>`;
  }
  // carouselInner.innerHTML += `<div class="carousel-item ${
  //   i === 0 ? "active" : ""
  // }">
  //    <img class="d-block w-100" src=${imgsArr[i]} alt="First slide">
  // </div>`;
}

// Example of one carousel item (slide)
{
  /* <div class="carousel-item active">
    <img class="d-block w-100" src="https://picsum.photos/id/1044/1280/720" alt="First slide">
  </div> */
}
