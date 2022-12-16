
// Mostrar el Menu

const showMenu = (toggleId, navId) => { 
    
    const toggle = document.getElementById(toggleId);
    
    const nav = document.getElementById(navId);
    
    // Se validan las variables 

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Añadimos la clase en caso que no la tenga, o la quitamos en caso de que si la tenga 
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu');

//  Quitar el Menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // Cuando le demos click a algun enlace, que en este caso tiene como nombre de clase ".nav__link", se quitará la clase "show-menu" del nav
    navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));

// Secciones de Scroll 
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);

// Cambiar el Background Header 

function scrollHeader () {
    const nav = document.getElementById('header');
    // Cuando el scroll sea mayor a 200, cambiar la clase de del nav-header
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    };
};

window.addEventListener('scroll', scrollHeader);

// Mostrar el Scroll Top

function scrollTop () {
    const scrollTop = document.getElementById('scroll-top');
    // Cuando el scroll sea mayor a 200, cambiar la clase de del scroll-top
    if (this.scrollY >= 560) {
        scrollTop.classList.add('scroll-top-show');
    } else {
        scrollTop.classList.remove('scroll-top-show');
    };
};

window.addEventListener('scroll', scrollTop);

// Tema oscuro y claro 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';


const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// verificamos si la web si tiene un tema oscuro o claro

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// Validamos si el usuario a elegido previamente un tema

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon  === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activar o desactivar el tema 

themeButton.addEventListener('click', () => {
    // añadir o quitar el icono oscuro/claro
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Guardamos el tema y el icono actual, que escogió el usario.

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});



// Scroll Reveal Animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset:true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200 
})

