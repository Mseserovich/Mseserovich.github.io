const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})