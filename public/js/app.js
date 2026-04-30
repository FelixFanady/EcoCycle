(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    const loginError = document.getElementById("loginError");
    if (loginError && error) {
      loginError.textContent = error;
      loginError.hidden = false;
    }

    const registerError = document.getElementById("registerError");
    if (registerError && error) {
      registerError.textContent = error;
      registerError.hidden = false;
    }
  });
})();
