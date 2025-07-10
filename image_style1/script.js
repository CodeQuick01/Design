const imageLeft = document.querySelector('.image-left');
const imageMid = document.querySelector('.image-mid');
const imageRight = document.querySelector('.image-right');

const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

btnRight.addEventListener('click', () => {
    const temp = imageLeft.id;

    imageLeft.id = imageMid.id;
    imageMid.id = imageRight.id;   
    imageRight.id = temp;          
});

btnLeft.addEventListener('click', () => {
    const temp = imageRight.id; 

    imageRight.id = imageMid.id;    
    imageMid.id = imageLeft.id;    
    imageLeft.id = temp;       
});