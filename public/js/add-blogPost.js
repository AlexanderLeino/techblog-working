const form = document.querySelector("form");

const createPostBtn = document.getElementById("createPostBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let blogTitle = document.getElementById("blogTitle").value.trim();
  let blogBody = document.getElementById("blogBody").value.trim();
  try {
    await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogBody, blogTitle }),
    })
    window.location.replace("/");
}
catch (e) {
  console.log(e)
}
})
