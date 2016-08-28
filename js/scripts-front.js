/*
============ Smooth scrolling ===========
*/
'use strict';

var pos = { current: 0, final: 0 };
var isScrolling = false;
var scrollDirection = -1;
var scroll = function scroll() {
    isScrolling = true;

    pos.current += Math.round((pos.final - pos.current) / 13 * 10) / 10;
    window.scrollTo(0, pos.current);

    if (scrollDirection === -1 && pos.current + 2 >= pos.final || scrollDirection === 1 && pos.current - 2 <= pos.final) {
        isScrolling = false;
        return;
    }

    requestAnimationFrame(scroll);
};

function onMouseWheel(e) {
    var wheelDistance = e.detail ? -e.detail / 3 : e.wheelDelta / 120;
    scrollDirection = e.detail < 0 ? 1 : e.wheelDelta > 0 ? 1 : -1;

    pos.final = window.scrollY - wheelDistance * 450;
    !isScrolling && scroll();

    e.preventDefault();
}

window.addEventListener('mousewheel', onMouseWheel);
window.addEventListener('DOMMouseScroll', onMouseWheel);
window.addEventListener('scroll', function () {
    return pos.current = window.scrollY;
});
/*
============ AOSinit ===========
*/
new AOS({boxClass:'aos',animateClass: 'animated',offset:0,mobile:false, live: false}).init();

/*
============ Bootstrap additional functions ===========
*/
( function( $ ) {
jQuery(function($) {
	
	//============ Remove classes  Bootstrap  ===========
	
	
	$( '.contactSection img' ).removeClass( 'img-responsive center-block' );
});
} )( jQuery );