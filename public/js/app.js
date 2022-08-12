const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('https://api.weatherstack.com/current?access_key=efb94ed60531139ab798b85c3653fbd0&query=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                alert("Mostrando resultados");
                console.log(Object.keys(data));

            }
        })
    })



//opcion2

var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch('https://api.weatherstack.com/current?access_key=efb94ed60531139ab798b85c3653fbd0&query=' + location, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


})