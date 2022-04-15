
function getAction(){
    const head = document.querySelector('.head')
    const nav = document.querySelector('nav')
    const barWrapper = document.querySelector('#bars')
     
    barWrapper.addEventListener('click', () =>{
        head.classList.toggle('height')
        nav.classList.toggle('navShow')
        barWrapper.classList.toggle('margin')
    })
}


getAction()

