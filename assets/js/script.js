const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 95) {
        header.classList.add('solid-bg')
    } else {
        header.classList.remove('solid-bg')
    }
})