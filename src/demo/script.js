import RelToAbs from '../index'

const openablePhoto = document.getElementById('photo');
new RelToAbs(openablePhoto);

const openabletext = document.getElementById('keep');
new RelToAbs(openabletext, {scrollToClose: true, swipeToClose: false, clickOutsideToClose: true});

const imageGrid = document.getElementById('images-grid');
const images = imageGrid.querySelectorAll('.relative-to-absolute');
images.forEach(image => {
    new RelToAbs(image);
});