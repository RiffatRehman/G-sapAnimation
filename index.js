// GSAP timeline for page1 animations
const tl = gsap.timeline({ delay: 0.5 }); // timeline starts with 0.5s delay

// Animate floating boxes (#box1 to #box5)
tl.from("#box1,#box2,#box3,#box4,#box5", {
  y: 300,            // start 300px below
  opacity: 0,         // start invisible
  duration: 1,        // 1 second animation
  stagger: 0.15,      // stagger between boxes
  ease: "power3.out"  // easing
});

// Animate left content: heading, paragraph, form
tl.from("#leftContent h1", { y: 40, opacity: 0, duration: 0.8 })
  .from("#leftContent p", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5") // overlap by 0.5s
  .from(".formBox", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5");

// SVG circle animation
const circle = document.querySelector("#myCircle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

// Set up circle stroke for drawing effect
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

// Animate circle stroke drawing and fill
tl.to(circle, { strokeDashoffset: 0, duration: 2 }) // draw stroke
  .to(circle, { fill: "blue", duration: 1 });       // fill color after stroke

// Animate images after SVG animation
tl.from(".img1", {
  x: -100,            // move in from left
  opacity: 0,         // start invisible
  duration: 1,
  ease: "power3.out"
}, "+=0.2");           // 0.2s after previous animation

tl.from(".img2", {
  x: 50,              // move in from right
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.5");           // overlap with previous image for smooth effect

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate page2 cards on scroll
gsap.utils.toArray("#page2 .card").forEach(card => {
  const offset = card.classList.contains("up") ? -20 : 20; // zig-zag effect
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",          // animation triggers when card is 85% from top
      toggleActions: "play none none none" // only play once
    },
    y: offset,      // final position after animation
    opacity: 1,     // fade in
    duration: 0.7,
    ease: "power2.out"
  });
});

// Animate page3 testimonial cards on scroll
gsap.utils.toArray("#page3 .card").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: "#page3",
      start: "top 80%",           // trigger when page3 reaches 80% from top
      toggleActions: "play none none none"
    },
    y: 0,                         // move to natural position
    opacity: 1,                    // fade in
    duration: 0.7,
    delay: i * 0.2,                // stagger cards one after another
    ease: "power2.out"
  });
});

// Animate small floating circles with icons
gsap.from(".smallcircles .icon-circle", {
  x: -100,          // move in from left
  opacity: 0,        // start invisible
  duration: 1,
  ease: "power3.out",
  stagger: 0.3       // stagger animation for each small circle
});
