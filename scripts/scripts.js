// Footer updates the year
const newDate = new Date();
document.getElementById("footer-text").innerHTML =
  "ALL RIGHTS RESERVED — " + newDate.getFullYear() + " © MICHAL FILIP";
//hamburger

const hamburgerBtn = document.getElementById("hamburger");
const menuContainer = document.querySelector(".menu-container");
const menuOverlay = document.querySelector(".menu-overlay");
const navBtns = document.querySelectorAll(".nav-btn");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("is-active");
  menuContainer.classList.toggle("menu-container-active");
  menuOverlay.classList.toggle("menu-overlay-active");

  navBtns.forEach((element) => {
    element.classList.toggle("nav-btn-active");
  });
});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const workContainer = document.getElementById("work-container");

const nightHTML =
  '<div class="night-copy">' +
  "<h3>The hidden beauty.</h3>" +
  "<p>" +
  " Creating a fascinating narrative of almost exclusively dark tones." +
  "</p>" +
  "</div>" +
  '<figure id = "lw1">' +
  '<img id="night-01" src="images/night-1.jpg" alt="Work example 1" />' +
  "</figure>" +
  '<figure id="lw2">' +
  '<img id="night-02" src="images/night-2.jpg" alt="Work example 2" />' +
  "</figure>" +
  '<figure id="lw3">' +
  '<img id="night-03" src="images/night-3.jpg" alt="Work example 3" />' +
  "</figure>" +
  '<figure id="lw4">' +
  '<img id="night-04" src="images/night-4.jpg" alt="Work example 4" />' +
  "</figure>";
const stillHTML =
  '<div class="still-copy">' +
  "<h3>Framing for the meaning.</h3>" +
  "<p>" +
  "Letting the ideas speak for the image." +
  "</p>" +
  "</div>" +
  '<figure id = "still01">' +
  '<img id="still-01" src="images/still-1.jpg" alt="Work example 1" class="scroll-right"/>' +
  "</figure>" +
  '<figure id="still02">' +
  '<img id="still-02" src="images/still-2.jpg" alt="Work example 2" class="scroll-up"/>' +
  "</figure>" +
  '<figure id="still03">' +
  '<img id="still-03" src="images/still-3.jpg" alt="Work example 3" class="scroll-left"/>' +
  "</figure>" +
  '<figure id="still04">' +
  '<img id="still-04" src="images/still-4.jpg" alt="Work example 4" class="scroll-down"/>' +
  "</figure>";
const fashionHTML =
  '<div class="fashion-copy">' +
  "<h3>Finding priorities.</h3>" +
  "<p>" +
  "Making the humanity the utmost virtue." +
  "</p>" +
  "</div>" +
  '<figure id = "fashion01">' +
  '<img id="fashion-01" src="images/fashion-1.jpg" alt="Work example 1" />' +
  "</figure>" +
  '<figure id="fashion02">' +
  '<img id="fashion-02" src="images/fashion-2.jpg" alt="Work example 2" />' +
  "</figure>" +
  '<figure id="fashion03">' +
  '<img id="fashion-03" src="images/fashion-3.jpg" alt="Work example 3" />' +
  "</figure>" +
  '<figure id="fashion04">' +
  '<img id="fashion-04" src="images/fashion-4.jpg" alt="Work example 4" />' +
  "</figure>";

function removeAnim(e) {
  e.classList.remove("animate-in");
}
function toggleInAnim(e) {
  e.classList.toggle("animate-out");
}
function toggleShake(e) {
  e.classList.toggle("shake-anim");
}

button1.addEventListener("click", function () {
  if (button1.classList.contains("current")) {
    toggleShake(button1);
    setTimeout(toggleShake, 250, button1);
  } else {
    button2.classList.remove("current");
    button3.classList.remove("current");
    button1.classList.add("current");
    contentReplace();
    function contentReplace() {
      workContainer.classList.add("animate-in");
      setTimeout(removeAnim, 250, workContainer);
      setTimeout(toggleInAnim, 250, workContainer);
      setTimeout(toggleInAnim, 500, workContainer);
      setTimeout(replaceHTML1, 250);

      function replaceHTML1() {
        workContainer.innerHTML = nightHTML;
      }
    }
  }
});
button2.addEventListener("click", function () {
  if (this.classList.contains("current")) {
    toggleShake(this);
    setTimeout(toggleShake, 250, this);
  } else {
    button1.classList.remove("current");
    button3.classList.remove("current");
    this.classList.add("current");
    contentReplace();
    function contentReplace() {
      workContainer.classList.add("animate-in");
      setTimeout(removeAnim, 250, workContainer);
      setTimeout(toggleInAnim, 250, workContainer);
      setTimeout(toggleInAnim, 500, workContainer);
      setTimeout(replaceHTML2, 250);

      function replaceHTML2() {
        workContainer.innerHTML = stillHTML;
      }
    }
  }
});

button3.addEventListener("click", function () {
  if (this.classList.contains("current")) {
    toggleShake(this);
    setTimeout(toggleShake, 250, this);
  } else {
    button1.classList.remove("current");
    button2.classList.remove("current");
    this.classList.add("current");
    contentReplace();
    function contentReplace() {
      workContainer.classList.add("animate-in");
      setTimeout(removeAnim, 250, workContainer);
      setTimeout(toggleInAnim, 250, workContainer);
      setTimeout(toggleInAnim, 500, workContainer);
      setTimeout(replaceHTML3, 250);

      function replaceHTML3() {
        workContainer.innerHTML = fashionHTML;
      }
    }
  }
});
