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


    fetch('http://api.weatherstack.com/current?access_key=efb94ed60531139ab798b85c3653fbd0&query=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.error
                messageTwo.textContent = data.location.name               
            }
        })
    })


    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch('http://api.weatherstack.com/current?access_key=efb94ed60531139ab798b85c3653fbd0&query=' + location, requestOptions)
      .then(response => response.text())
      .then(result => 
        contenidojson = result
        )
      .catch(error => console.log('error', error));
      messageOne.textContent = ''
      messageTwo.textContent = 'Resultado: '
      

          console.log("Respuesta: ")
        console.log(contenidojson)

        objlocation = JSON.parse(contenidojson)
        
        clima1.textContent = '<h2>Ciudad:</h2> ' + objlocation.location.name
        clima2.textContent = '<h2>País: </h2>' + objlocation.location.country
        clima3.textContent = '<h2>Hora actual: </h2>' + objlocation.current.observation_time
        clima4.textContent = '<h2>Temperatura: </h2>' + objlocation.current.temperature
        clima5.textContent = '<h2>Codigo: </h2>' + objlocation.current.weather_code
//        clima6.textContent = objlocation.current.weather_icons
        clima6.textContent = '<h2>Clima: </h2>' + objlocation.current.weather_descriptions
        clima7.textContent = '<h2>Velocidad del viento: </h2>' + objlocation.current.wind_speed
        clima8.textContent = '<h2>Dirección del viento: </h2>' + objlocation.current.wind_dir
        clima9.textContent = '<h2>Humedad: </h2>' + objlocation.current.humidity
        clima10.textContent = '<h2>Porcentaje de nubes: </h2>' + objlocation.current.cloudcover


        console.log(objlocation.location.name)
        console.log(objlocation.location.country)
        console.log(objlocation.current.observation_time)
        console.log(objlocation.current.temperature)
        console.log(objlocation.current.weather_code)
        console.log(objlocation.current.weather_icons)
        console.log(objlocation.current.weather_descriptions)
        console.log(objlocation.current.wind_speed)
        console.log(objlocation.current.wind_dir)
        console.log(objlocation.current.humidity)
        console.log(objlocation.current.cloudcover)


        

})