const deleteBtn = document.getElementById("deletePostBtn");
const updateBtn = document.getElementById("updatePostBtn");

deleteBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const pathName = window.location.pathname;

    let id = pathName.slice(6);

  await fetch(`/api/post/edit/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.replace("/");
});

updateBtn.addEventListener("click", async (e) => {
    e.preventDefault();

  const body = document.getElementById("bodyBox").value;
  const title = document.getElementById("titleBox").value;

  const pathName = window.location.pathname;
  let id = pathName.slice(6);

  await fetch(`/api/post/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.replace("/");
});
