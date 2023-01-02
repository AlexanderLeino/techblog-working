const blogPost = document.getElementsByClassName("blogPost");

for (let i = 0; i < blogPost.length; i++) {
  blogPost[i].addEventListener("click", (e) => {
    let postId = e.currentTarget.getAttribute("data-id");
    fetch(`/edit/${postId}`, {
      method: "GET",
      headers: {
        "Content-type": "applicaiton/json",
      },
    })
      .then((res) => {
        console.log(res);
        document.location.replace(`/edit/${postId}`);
      })
      .catch((e) => console.log(e));
  });
}
