//simpleParallax.js syntax

var image = document.getElementsByClassName("scroll-right");
new simpleParallax(image, {
  orientation: "right",
  overflow: true,
  maxTransition: 1,
});
var image2 = document.getElementsByClassName("scroll-left");
new simpleParallax(image2, {
  orientation: "left",
  overflow: true,
  maxTransition: 1,
});
var image3 = document.getElementsByClassName("scroll-down");
new simpleParallax(image3, {
  orientation: "down",
  overflow: true,
  maxTransition: 1,
});
var image4 = document.getElementsByClassName("scroll-up");
new simpleParallax(image4, {
  orientation: "up",
  overflow: true,
  maxTransition: 1,
});

//AOS
AOS.init({
  duration: 1000,
  offset: -50,
  once: true,
});
