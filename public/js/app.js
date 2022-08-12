const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messagetres = document.querySelector('#message-3')
const messagecuatro = document.querySelector('#message-4')

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
      .then(result => {
        obj = JSON.parse(result)
        messagetres.textContent = obj.request
        }
        )
      .catch(error => console.log('error', error));


})