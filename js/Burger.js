const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link');
        } else {
        sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// end sections active link 
//hady
// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
   //reset: true,
})

sr.reveal(`.home-data, .footer`)
sr.reveal(`.home-dish`, {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home-burger`, {delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.home-ingredient`, {delay: 1600, interval: 100})
sr.reveal(`.recipe-img, .delivery-img, .contact-image`, {origin: 'left'})
sr.reveal(`.recipe-data, .delivery-data, .contact-data`, {origin: 'right'})
sr.reveal(`.popular-card`, {interval: 100})
