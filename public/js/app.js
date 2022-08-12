const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messagetres = document.querySelector('#message-3')
const messagecuatro = document.querySelector('#message-4')
var contenidojson = 0

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


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
      messageOne.textContent = '...'
      messageTwo.textContent = 'Resultado: '
      

          console.log("Respuesta: ")
        console.log(contenidojson)

        objlocation = JSON.parse(contenidojson)
        messagetres.textContent = objlocation
        messagecuatro.textContent = '...'
        
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