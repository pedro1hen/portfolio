const pointer = document.querySelector('[data-pointer]')
const letters = [...document.querySelectorAll('[data-letter]')]

const mobileMenuIcon = document.querySelector('[data-mobileMenu]')
const mobileMenuList = document.querySelector('[data-mobileMenuList]')

mobileMenuIcon.addEventListener('click', () => {
    mobileMenuList.classList.toggle('invisible')
})

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        pointer.classList.toggle('invisible')
    }, 200)

    for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            letters[i].classList.remove('invisible')
        }, 150 * i)
    }
    
})