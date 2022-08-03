import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Horizontal Scroll
export default function() {
    let ldirection = 'horizontal';
	const scroll = new LocomotiveScroll({
		el: document.querySelector('.scroll-container'),
        getDirection: true,
        direction:  ldirection,
        lerp: 0.1,
        smooth: true,
        tablet: {
            smooth: true,
            direction: 'vertical',
        },
        smartphone: {
            smooth: true,
            direction: 'vertical'
        }
	});

    window.addEventListener('resize', () => {
        let breakpoint = 1024;
        let currentWidth = window.innerWidth;

        if (currentWidth > breakpoint) {
            let ldirection = 'horizontal';
            lscroll.destroy();
            lscroll.init();
        }

        else {
            let ldirection = 'vertical';
            lscroll.destroy();
            lscroll.init();
        }

        lscroll.update();
    });
}