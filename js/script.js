//abrir ou fechar o menu numa resolução menor
let menuIcon = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



//MUDAR A COR DO TEXTO DEPENDENDO DA SECÇÃO DO PORTIFÓLIO
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    //reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-home, .cabeca', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, portifolio-box, .contato form',{ origin: 'bottom' });
ScrollReveal().reveal('.conteudo-home h1, .sobre-img',{ origin: 'left' });
ScrollReveal().reveal('.conteudo-home p, .sobre-conteudo',{ origin: 'right' });


//animação de digitar
const digitar = new Typed('.texto-digitado', {
    strings: ['Estudante de SI', 'Futuro Estágiario', 'Futuro Profissional'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
