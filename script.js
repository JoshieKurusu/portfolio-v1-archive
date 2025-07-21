// TRANSITION OF THE PROJECTS LOGO IN THE HOME PAGE
const projectLogo = gsap.utils.toArray('.project-logo');
projectLogo.forEach((contain, index) => {
    gsap.set(contain, {y: 80});
    ScrollTrigger.create({
        id: index,
        trigger: contain,
        start: () => `top-=${gsap.getProperty(contain, 'y')} bottom-=250`,
        end: () => `+=${contain.clientHeight}`,
        markers: false,
        onEnter: () => {
            $(contain).addClass('inaction');
            gsap.to(contain, {y: 0});
        }
    });
});

// DISPLAY SUCCESS MESSAGE AFTER SUBMITTING THE FORM
const myForm = document.querySelector('#contact-form');
const successMsg = document.querySelector('.success-msg');
myForm.addEventListener('submit', (event) => {
    event.preventDefault;
    successMsg.style.display = 'block';
    setTimeout(() => successMsg.style.display = 'none', 2000);
});