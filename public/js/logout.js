const logout = async () => {
  try {
    
    await fetch("/api/users/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      
    });
    window.location.replace('/dashboard')
  } catch (e) {
    console.log(e);
  }
};

let logOutBtn = document.getElementById("logout");
logOutBtn.addEventListener("click", logout);

