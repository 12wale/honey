// get the main element 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const honey =  document.getElementById("honey"); 
const content =  document.getElementById("content"); 
const h1 =  document.getElementById("h1reval");
const videoAbout =  document.getElementById("videoAbout");
const cards =  document.querySelectorAll(".pros .card"); 
const rep = document.querySelectorAll('.repos .rep'); 
const contactFooter = document.querySelectorAll('#connectFooter a'); 
const menuList = document.getElementById('list');
const links = document.querySelectorAll('#connect a'); 
const iconMenu = document.querySelector('header #iconMenu');
let list = document.querySelectorAll('#list li');
let arrayList = Array.from(list);
// Show the button when user scrolls down //
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
// set the active mode on load the page //
window.onload = () =>{
    arrayList[0].classList.add('active');
}
// Scroll to top when button is clicked //
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
arrayList.map((e) => {
    e.onclick = () =>{
        list.forEach(i =>{
            i.classList.remove('active');
        })
        e.classList.add('active');
    }
})
// icon button in mobile media //
//menuList.style.maxHeight = '0px';
iconMenu.onclick = function toggleMenu(){
    console.log('done');
    if (menuList.style.maxHeight == '0px') {
        menuList.style.maxHeight = '400px';
    }
    else{
        menuList.style.maxHeight = '0px';
    }
}
// scroll reval //
ScrollReveal({ 
    reset: true ,
    distance : '60px',
    duration : 2500,
    delay: 400
});
ScrollReveal().reveal(honey, 
    {
        delay: 500,
        origin: 'bottom'
    });
ScrollReveal().reveal(content, 
    {
        delay: 500,
        origin: 'left',
        distance : '40px'
    });
ScrollReveal().reveal(links, 
    {
        delay: 500,
        origin: 'bottom',
        interval: 200
    });
ScrollReveal().reveal(rep, 
    {
        delay: 500,
        origin: 'left',
        interval: 200
    });
ScrollReveal().reveal(contactFooter, 
    {
        delay: 500,
        origin: 'bottom',
        interval: 200
    });
ScrollReveal().reveal(h1reval, 
    {
        delay: 500,
        origin: 'left',
    });
ScrollReveal().reveal(cards, 
    {
        delay: 500,
        origin: 'bottom',
        interval: 200
    });
    ScrollReveal().reveal(videoAbout, 
    {
        delay: 700,
        origin: 'left',
    });