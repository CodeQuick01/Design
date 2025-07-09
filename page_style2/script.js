const images = [
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3')
];

let index = 0;

setInterval(() => {
  images.forEach(img => {
    img.classList.remove('image');
    img.classList.add('image-disable');
  });

  images[index].classList.remove('image-disable');
  images[index].classList.add('image');

  index = (index + 1) % images.length;
}, 3000);