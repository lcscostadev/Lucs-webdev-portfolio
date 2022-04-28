const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar');
const toTop = document.querySelector('.to-top');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}))

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})
