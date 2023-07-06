'use strict';

let blink = document.querySelector('#blink');

setInterval(() => {
    blink.style.opacity = blink.style.opacity == 1 ? 0 : 1
}, 800);


