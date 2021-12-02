const cards = document.querySelector('.cards')
const buttonMore = document.querySelector('.button-more > a')
const btnHeaderShop = document.querySelector('.head-menu-item > a')
const btnBanner = document.querySelector('.shop-banner-button > a')

const openItems = function () {
    if (window.getComputedStyle(cards).height == '375px') {
        cards.style.height = 1155 + 'px'
        buttonMore.textContent = 'Hide all products'
    } else {
        cards.style.height = 375 + 'px'
        buttonMore.textContent = 'Shop all products'
        document.querySelector('.cards-block').scrollIntoView({block: "start", behavior: "smooth"});
    }
}

const openItemWButt = function () {
    cards.style.height = 1155 + 'px'
    buttonMore.textContent = 'Hide all products'
}

buttonMore.addEventListener('click', openItems)
btnHeaderShop.addEventListener('click', openItemWButt)
btnBanner.addEventListener('click', openItemWButt)

