// Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika Hambuger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


//untuk menutup
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});