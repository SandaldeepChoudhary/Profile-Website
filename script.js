var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var navH4 = document.querySelectorAll("#nav h4");
var colon1 = document.querySelector("#colon1");
var colon2 = document.querySelector("#colon2");
var cards = document.querySelectorAll(".card");
var page4h1 = document.querySelector("#page4 h1");
var text = document.querySelector(".dynamicText");
const roles = ["Full-Stack Developer", "Designer", "App Developer"];
let currentIndex = 0;
textUpdate();

function textUpdate(){
  text.textContent = roles[currentIndex];
  currentIndex = (currentIndex + 1) % roles.length;
}
setInterval(textUpdate, 4000);

//Adding Cursor Animation for Cards
// cards.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     cards.style.transform = "rotate3d(0.5, 0.5, 0, 15deg)";
//   });

//   elem.addEventListener("mouseleave", function () {
//     crsr.style.transition = "transform 0.3s ease";
//     crsr.style.transform = "scale(1)";
//     crsr.style.border = "1px solid #ceff09";
//     crsr.style.backgroundColor = "#ceff09";
//     navH4.style.color = ""; // Reset the color
//   });
// });

navH4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.transition = "transform 0.3s ease";
    crsr.style.transform = "scale(3)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    navH4.style.color = "rgb(34, 99, 219)";
    
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.transition = "transform 0.3s ease";
    crsr.style.transform = "scale(1)";
    crsr.style.border = "1px solid rgb(34, 99, 219)";
    crsr.style.backgroundColor = "rgb(34, 99, 219)";
    navH4.style.color = ""; // Reset the color
  });
});

// Adding Cursor animation for whole HTML

document.addEventListener("mousemove", function (dets) {
  crsr.style.transition = "transform 1s ease";
  blur.style.transition = "transform 1s ease";
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 260 + "px";
  blur.style.top = dets.y - 260 + "px";
});

//Adding ScrollTrigger for Navbar

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "108px",
  duration: 0.5,

  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10px", //to start the scrolling
    end: "top -20px",
    scrub: 1,
    // markers: true
  },
});

//Adding ScrollTrigger for Main Div

gsap.to("#main", {
  backgroundColor: "#000",
  duration: 1,
  scrollTrigger: {
    trigger: "#main",
    start: "top -30%",
    end: "top -90%",
    // markers: true,
    scrub: 2,
  },
});


//Adding ScrollTrigger and Stagger for About-Us Div

// gsap.from("#about-us img, #about-us-content", {
//   y: 50,
//   opacity: 0,
//   stagger: 0.3,
//   scrollTrigger: {
//     trigger: "#about-us",
//     scroller: "body",
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 1,
//   },
// });

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    start: "top 95%",
    // markers: true,
    end: "top 50%",
    scrub: 3,
  },
});

gsap.from("#colon1", {
  x: -30,
  y: -30,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 35%",
    // markers: true,
    end: "top 55%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  x: 30,
  y: 30,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 35%",
    // markers: true,
    end: "top 55%",
    scrub: 2,
  },
});

gsap.from("#page4 h1",{
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    // markers: true,
    end: "top 75%",
    scrub: 2,
  },
})
