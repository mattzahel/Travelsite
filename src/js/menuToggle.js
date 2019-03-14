const navItems = document.querySelectorAll('.navigation__item');
const navToggle = document.querySelector('#nav-toggle');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        if(navToggle.checked) {
            navToggle.checked = false;
        }
    })
});