
import hasScrollbar from './scrollbar.js';

const footer = document.querySelector('footer');

const setFooter = _ => {
    footer.classList.remove('fixed-bottom');

    if (!hasScrollbar()) footer.classList.add('fixed-bottom');
};

window.addEventListener('DOMContentLoaded', setFooter);

window.addEventListener('resize', setFooter);
window.addEventListener('click', e => setTimeout(setFooter, 5));