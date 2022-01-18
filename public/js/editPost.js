

const deleteBtn = document.getElementById('deletePostBtn')
const updateBtn = document.getElementById('updatePostBtn')


deleteBtn.addEventListener('click', (e)=> {
    let id = window.location.pathname[6]
    console.log(id)
    e.preventDefault()
    fetch(`/api/post/edit/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }, 

    })
   
})

updateBtn.addEventListener('click', (e)=> {
    const body = document.getElementById('bodyBox').value
    const title = document.getElementById('titleBox').value
    let id = window.location.pathname[6]
    e.preventDefault()
    fetch(`/api/post/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, body}),
        headers: {
            'Content-Type': 'application/json'
          }, 

    })
   
})