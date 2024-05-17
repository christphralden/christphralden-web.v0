import gsap from 'gsap';
import { navigate } from 'astro:transitions/client';

export const animatePageIn = () => {
    const transitionElement = document.getElementById('transition-element');

    if (transitionElement) {
        const tl = gsap.timeline();

        tl.set(transitionElement, {
            yPercent: 0,
        })
        .to(transitionElement, {
            yPercent: -100,
            duration: 0.4,
            ease:'power2.inOut'
        })
        .to(
            transitionElement,
            {
                duration: 0.4,
            },
            '<'
        );
    }
};

export const animatePageOut = (to:string) => {
    const animationWrapper = document.getElementById('transition-element');

    if (animationWrapper) {
        const tl = gsap.timeline();

        tl.set(animationWrapper, {
            yPercent: 100,
        })
        .to(animationWrapper, {
            yPercent: 0,
            duration: 0.4,
            ease:'power2.inOut',
            onComplete: () => {
                navigate(to);

            },
        })
        .to(
            animationWrapper,
            {
                duration: 0.4,
            },
            '<'
        );
    }
};