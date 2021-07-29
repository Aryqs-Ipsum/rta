import RelToAbs from './src'

const openablePhoto = document.getElementById('photo');
new RelToAbs(openablePhoto, {clickOutsideToClose: false});

const openabletext = document.getElementById('keep');
new RelToAbs(openabletext, {scrollToClose: true, swipeToClose: false});