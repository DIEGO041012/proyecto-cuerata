gsap.registerPlugin(ScrollTrigger);

const additionalX = { val: 0 };
let additionalXAnim;
let offset = 0;
let originalImages = gsap.utils.toArray(".image");
const container = document.querySelector(".gallery");
const sliderWidth = container.offsetWidth;

// DUPLICATE IMAGES FOR LOOP
originalImages.forEach((image) => {
  var clone = image.cloneNode(true);
  container.appendChild(clone);
});

let images = gsap.utils.toArray(".image");

// SET ANIMATION
images.forEach((item) => {
  gsap.to(item, {
    x: "-=" + Number(sliderWidth / 2),
    duration: 30,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => {
        offset += additionalX.val;
        x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
        return x;
      })
    }
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: ".gallery",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 2000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 4000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
  }
});