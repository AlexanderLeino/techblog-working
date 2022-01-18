const form = document.querySelector('form')
const userName = document.getElementById('userName')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
  e.preventDefault()
  const data = {
    userName: userName.value,
    password: password.value,
  }
  console.log(data)
  fetch('/newUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .catch(err => console.log(err))
})