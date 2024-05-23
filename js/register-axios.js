const axios = require("axios").default;

const submitBtn = document.querySelector(".submit-button");

function register() {
  submitBtn.addEventListener("click", () => {
    axios
      .post("/api/users/register", {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}
