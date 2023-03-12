const emailInput = document.querySelector("#email");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");

function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    if (error.classList.contains("visible")) {
      error.classList.remove("visible");
    }
    return;
  } else {
    if (!error.classList.contains("visible")) {
      error.classList.add("visible");
    }
    return;
  }
}

submit.addEventListener("click", validateEmail);
