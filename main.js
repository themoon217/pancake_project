function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.slide-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});


