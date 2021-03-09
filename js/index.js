const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

//Reset translateX to 0 
navLinks.forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})