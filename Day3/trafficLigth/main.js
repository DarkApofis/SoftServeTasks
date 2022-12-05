let currentLight = 'greenLight'

const lightColors = {
    green: '#B4E59B',
    yellow: '#FFEA8A',
    red: '#F0A29A'
}

const greenLight = document.querySelector('.green')
const yellowLight = document.querySelector('.yellow')
const redLight = document.querySelector('.red')

const changeLightButton = document.getElementById('lightButton')

changeLightButton.addEventListener('click', () => {
    if(currentLight === 'greenLight'){
        greenLight.style.backgroundColor = '#233143'
        yellowLight.style.backgroundColor = '#FFEA8A'
        currentLight = 'yellowLight'
    } else if(currentLight === 'yellowLight'){
        yellowLight.style.backgroundColor = '#233143'
        redLight.style.backgroundColor = '#F0A29A'
        currentLight = 'redLight'
    } else {
        redLight.style.backgroundColor = '#233143'
        greenLight.style.backgroundColor = '#B4E59B'
        currentLight = 'greenLight'
    }
})