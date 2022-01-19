const menu = document.getElementById('mobileMenu')
const burger = document.getElementById('hamburger')

burger.addEventListener('click', function(){
    console.log('niu');
    this.classList.toggle('is-active')
    console.log(menu);
    menu.classList.toggle('active')
})

