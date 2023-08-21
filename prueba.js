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
