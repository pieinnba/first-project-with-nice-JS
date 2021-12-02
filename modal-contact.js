const closeButton = document.querySelector('.close-button')
const openButton = document.querySelector('#head-contact')

const backgroundModal = document.querySelector('.contact-modal')
const bodyModal = document.querySelector('.contact-modal-content')

function closeModal (){
    bodyModal.style.top = -400 + 'px'
    setTimeout(function (){
        backgroundModal.style.opacity = 0
        // backgroundModal.style.display = 'none'
    }, 500)

    setTimeout(function (){
        backgroundModal.style.display = 'none'
    }, 1000)
}

function openModal (){
    backgroundModal.style.display = 'block'
    // backgroundModal.style.opacity = 1
    setTimeout(function (){
        backgroundModal.style.opacity = 1
        // bodyModal.style.top = 25 + '%'
    }, 100)
    setTimeout(function (){
        bodyModal.style.top = 25 + '%'
    }, 500)
}

closeButton.addEventListener('click', closeModal)
openButton.addEventListener('click', openModal)