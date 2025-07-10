const images = document.querySelectorAll('.images');
const image = document.querySelector('.image');

images.forEach((img) => {
    img.addEventListener('click', () => {
        image.id = img.id;
    });
});