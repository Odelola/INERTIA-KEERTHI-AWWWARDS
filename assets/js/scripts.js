// CREATED BY ODELOLA, DESIGN BY KEERTHI
Splitting();
// document.querySelector('.hero-section_img').addEventListener('mousemove', function(e){
//     document.querySelector('.color-difference-cursor').style.left = e.clientX + 'px';
//     document.querySelector('.color-difference-cursor').style.transform= `translate3d(calc(${e.clientX / 2}px), calc(${e.clientY/2}px), 0)`;
//     document.querySelector('.color-difference-cursor').style.top = e.clientY + 'px';
// })


const animationTimelIne = gsap.timeline();

animationTimelIne.to('.loader-vertical-line', {
    height: "100%"
});

animationTimelIne.from('.loader-image', {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    opacity: 1,
    x: "7.5",
},);

animationTimelIne.to('#INERTIA_CREDIT', {
    opacity: 1,
});

animationTimelIne.to('#KEERTHI_CREDIT', {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    x: 0,
}, "-=1");

animationTimelIne.to('#loader', {
    opacity: 0,
    display: "none",
});

animationTimelIne.to('html', {
    scrollbarWidth: "auto",
});

animationTimelIne.from('nav .nav-inner a', {
    y: -120,
    opacity: 0,
    stagger: .4
});

animationTimelIne.from('.hero-absolute-text h1 .char', {
    opacity: 0,
    y: 140,
    stagger: 0.07
});

animationTimelIne.to('.hero-section_img', {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    scale: 1,
    ease: "expo.out"
}, "-=.9");

animationTimelIne.from('.hero-section_img .hero_image', 3, {
    scale: 2,
    ease: "expo.out"
}, "-=1.3");

animationTimelIne.to('.hero-section h2, .hero-section p', {
    // opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "Power3.out"
}, "-=.9");