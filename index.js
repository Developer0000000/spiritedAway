alert('Please, see this website in both fullscreen and mobile!')


var mainTL = gsap.timeline();

gsap.set(".image", { y: -30, opacity: 0 });
gsap.set("nav", { y: -30, opacity: 0 });
gsap.set(".right", { opacity: 1 });
gsap.set(".a", { y: 30, opacity: 0 });
gsap.set(".image", { y: 30, opacity: 0, scale: 0.01 }); //* scale: 1.6


mainTL
    .from(".left", {
        width: 0,
        duration: 1.5,
        ease: "Expo.easeInOut",
        background: '#ffffff73'
    })
    .from(".right", {
        opacity: 0,
        width: '70%',
        duration: 1.5,
        ease: "Power4.easeOut"
    })
    .to("nav", {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "Power4.easeOut"
    })
    .to(".a", {
        delay: -4,
        stagger: 0.5,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "Expo.easeInOut"
    })
    .to(".image", {
        delay: -3,
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.4,
        ease: "Expo.easeInOut"
    })






gsap.set(".nav_link", { x: 30, opacity: 0 });
gsap.set("nav", { y: -30, opacity: 0 });

var tl = gsap.timeline();
tl
    .from("nav", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "Power4.easeOut"
    })
    .to("#sidebar", {
        right: 0,
        opacity: 1,
        duration: 0.7,
        ease: "Power4.easeOut"
    })
    .to(".nav_link", {
        x: 0,
        delay: -0.5,
        stagger: 0.3,
        opacity: 1,
        duration: 0.7,
        ease: "Power4.easeOut"
    })
    .from(".ri-close-large-fill", {
        delay: -0.65,
        opacity: 0,
        duration: 0.5,
        ease: "Power4.easeOut"
    })

tl.pause();




const menuBtn = document.getElementById('menu_btn');
const menuClose = document.querySelector('#close_sidebar_btn');
const overly = document.getElementById('overly');


menuBtn.addEventListener('click', () => {
    overly.classList.add('opacity_60');
    tl.play();
});

menuClose.addEventListener('click', () => {
    overly.classList.remove('opacity_60');
    tl.reverse();
});


const btn = document.getElementById('details_btn');
const closeBtn = document.getElementById('close_btn');
const details = document.getElementById('details');

btn.addEventListener('focus', () => {
    details.classList.add('opacity_1');
    overly.classList.add('opacity_60');
})

btn.addEventListener('blur', () => {
    details.classList.remove('opacity_1');
    overly.classList.remove('opacity_60');
})

closeBtn.addEventListener('focus', () => {
    details.classList.remove('opacity_1');
    overly.classList.remove('opacity_60');
})