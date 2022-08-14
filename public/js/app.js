const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const clima1 = document.querySelector('#clima1')
const clima2 = document.querySelector('#clima2')
const clima3 = document.querySelector('#clima3')
const clima4 = document.querySelector('#clima4')
const clima5 = document.querySelector('#clima5')
const clima6 = document.querySelector('#clima6')
const clima7 = document.querySelector('#clima7')
const clima8 = document.querySelector('#clima8')
const clima9 = document.querySelector('#clima9')
const clima10 = document.querySelector('#clima10')

var contenidojson = 0

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


    fetch('http://api.weatherstack.com/current?access_key=efb94ed60531139ab798b85c3653fbd0&query=' + location ).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error.info
                console.log(data.error)
            } else {
                messageOne.textContent = ''
                messageTwo.textContent = 'Resultados: '   
                clima1.textContent = data.location.name
                clima2.textContent = data.location.country
                clima3.textContent = data.current.observation_time
                clima4.textContent = data.current.temperature
                clima5.textContent = data.current.weather_code
                clima6.textContent = data.current.weather_descriptions
                clima7.textContent = data.current.wind_speed
                clima8.textContent = data.current.wind_dir
                clima9.textContent = data.current.humidity
                clima10.textContent = data.current.cloudcover            
            }
        })
    })


    
        

})