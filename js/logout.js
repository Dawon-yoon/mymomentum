const logout = document.querySelector("#logout a");

function logoutHandler() {
  window.localStorage.clear();
  location.reload();
}

logout.addEventListener("click", logoutHandler);
