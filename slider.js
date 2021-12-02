document.querySelector('.slider').style.width = window.innerWidth + 'px'
let slides = document.querySelectorAll('.slide')
let slider = []

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i]
    slides[i].remove()
}

let step = 0
let offset = 0
let timer = 0

function sliding() {
    let newSlide = document.createElement('div')
    newSlide = slider[step]
    newSlide.classList.add('slide')
    newSlide.style.left = offset * window.innerWidth + 'px'
    newSlide.style.width = window.innerWidth + 'px'
    document.querySelector('.slider').appendChild(newSlide)
    if(step + 1 == slider.length) {
        step = 0
    } else {
        step++
    }
    offset = 1
}

function slideNext() {
    clearTimeout(timer)
    autoSlide()

    document.querySelector('.slider').onclick = null
    let slides2 = document.querySelectorAll('.slide')
    let offset2 = 0
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.width = window.innerWidth + 'px'
        slides2[i].style.left = offset2 * window.innerWidth - window.innerWidth + 'px'
        offset2++
    }

    setTimeout(function (){
        slides2[0].remove()
        sliding()
        document.querySelector('.slider').onclick = slideNext    
    }, 600)
}

function autoSlide() {
    timer = setTimeout(slideNext, 4000)
}

sliding()
sliding()
autoSlide()

document.querySelector('.slider').onclick = slideNext

