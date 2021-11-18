var box = document.querySelector('.box');
targetElm = document.querySelector('.boxChild');



var link1 = document.getElementById("link1");



document.querySelector('button').addEventListener('click', function() {
    scrollToElm(box, targetElm, 600);
});

var link1 = document.getElementById("link1");

link1.scrollIntoView({
    behavior: "smooth",
    block:"start",
    inline:"nearest"
});



function scrollToElm(container, elm, duration) {
    var pos = getRelativePos(elm);
    scrollTo(container, pos.top, 2);
}

function getRelativePos(elm) {
    var pPos = elm.parentNode.getBoundingClientReact(),
    cPos = elm.getBoundingClientReact(),
    pos = {};

    pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop,
    pos.right = cPos.right - pPos.right,
    pos.bottom = cPos.bottom - pPos.bottom,
    pos.left = cPos.left - pPos.left;

    return pos;
}

function scrollTo(element, to, duration, onDone) {
    var start = element.scrollTop,
    change = to - start,
    startTime = performance.now(),
    val, now, elapsed, t;
}


function animationScroll() {
    now = performance.now();
    elapsed = (now - startTime) / 1000;
    t = (elapsed/duration);

    element.scrollTop = start + change * easeInOutQuad(t);

    if ( t < 1 )
    window.requestAnimationFrame(aniamtionScroll);
    else 
    onDone && onDone();
};

animateScroll();


function easeInOutQuad(t) {
    return t < .5 ? 2*t*t : -1+(4-2*t)*t 
};