let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.nav__link');
let y = document.querySelector('.portfolio__item1');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

//Reset translateX to 0 
navLinks.forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

y.addEventListener('click', () => {
    myFunction();
    
})

function myFunction() {
    var x = document.querySelector('.modal')
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }