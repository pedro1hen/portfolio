const pointer = document.querySelector('[data-pointer]')
const letters = [...document.querySelectorAll('[data-letter]')]

const mobileMenuIcon = document.querySelector('[data-mobileMenu]')
const mobileMenuList = document.querySelector('[data-mobileMenuList]')

mobileMenuIcon.addEventListener('click', () => {
    mobileMenuList.classList.toggle('invisible')
})

let seconds = 0

document.addEventListener('DOMContentLoaded', () => {
    const intervalPointer = setInterval(() => {
        seconds += 0.2
        pointer.classList.toggle('invisible')
        if (seconds > 10) {
            clearInterval(intervalPointer)
        }
    }, 200)

    for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            letters[i].classList.remove('invisible')
        }, 150 * i)
    }
    
})