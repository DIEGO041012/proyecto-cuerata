// script.js
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
let currentImage = 1;

function changeImage() {
    if (currentImage === 1) {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
        currentImage = 2;
    } else {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
        currentImage = 1;
    }
}

// Cambiar la imagen cada 3 segundos (3000 ms)
setInterval(changeImage, 3000);

// Projects section - Left
  gsap.set(".pbox-left", {
    opacity: 0,
    x: -800
  });
  gsap.to(".pbox-left", {
    duration: 1.6,
    x: 0,
    opacity: 1,
    scale: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top center",
      end: "center",
      markers: false
    }
  });
  
  // Projecr section - Right
  gsap.set(".pbox-right", {
    x: 500
  });
  gsap.to(".pbox-right", {
    duration: 1.6,
    x: 0,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top center",
      end: "center",
      marker: false
    }
  });
  
  // Project section - content section
  gsap.set(".project-content", {
    x: -200,
    y: -200,
    opacity: 0
  });
  gsap.to(".project-content", {
    duration: 1.6,
    x: 0,
    y: 0,
    opacity: 1,
    delay: 0.2,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top center",
      end: "center",
      markers: false
    }
  });
