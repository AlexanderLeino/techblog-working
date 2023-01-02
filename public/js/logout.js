const logout = async () => {
  try {
    await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e);
  }
};

let logOutBtn = document.getElementById("logout");
logOutBtn.addEventListener("click", logout);
