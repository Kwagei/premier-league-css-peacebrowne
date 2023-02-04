window.onscroll = () => scroller();

const header = document.querySelector('header')
const sticky = header.children[2].offsetTop;


const scroller = () => {

    if(window.pageYOffset > sticky){

        header.classList.add('stick');
        header.style.height = '8rem'
        header.children[0].style.display = 'none'
        header.children[1].style.height = '50%'
        header.children[2].style.height = '50%'

    } 
    else {

        header.classList.remove('stick');
        header.style.height = '11rem'
        header.children[0].style.display = 'block'
        header.children[1].style.height = '35%'
        header.children[2].style.height = '28%'

    }
}