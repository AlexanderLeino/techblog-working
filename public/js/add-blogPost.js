
const form = document.querySelector('form')

const createPostBtn = document.getElementById('createPostBtn')



form.addEventListener('submit', e => {
  e.preventDefault() 
  let blogTitle = document.getElementById('blogTitle').value.trim()
  let blogBody = document.getElementById('blogBody').value.trim()
  console.log(blogTitle, blogBody)
    fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({blogBody, blogTitle}),
  }) 
      .catch((e) => {
        console.log(e)
      })
})