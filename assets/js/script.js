const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 95) {
        header.classList.add('bg-solid')
    } else {
        header.classList.remove('bg-solid')
    }
})