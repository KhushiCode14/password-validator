const specialCharValidation = document.getElementById("specialChar");
const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
const formSubmit = document.getElementById("formSubmit");
const loweCaseValidation = document.getElementById("lowercase");
const upperCaseValidation = document.getElementById("uppercase");
// const characterValidation = document.getElementById("character");
const numberValidation = document.getElementById("number");
const passwordLengthValidation = document.getElementById("character");
// Attach event listener to form submission
const passwordValidator = () => {
  const password = inputField.value;
  const hasNumber = /\d/.test(password); //reguslar expression
  const hasLowercase = /[a-z]/.test(password); //check the lowercase expression
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};:'"<>,.?]/.test(password);
  const passwordLength = password.length >= 8;
  if (
    hasNumber &&
    hasLowercase &&
    hasUppercase &&
    hasSpecialChar &&
    passwordLength
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#4CAF50"; // Green color
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#ccc"; // Gray color
    submitButton.style.backgroundColor = "#cccccc"; // Gray color
    submitButton.style.cursor = "not-allowed";
  }

  //   lowercase validation
  loweCaseValidation.style.backgroundColor = hasLowercase
    ? "#d1fae5"
    : "#fee2e2";
  loweCaseValidation.style.color = hasLowercase ? "#065f46" : "#991b1b";
  //   upper case validation
  upperCaseValidation.style.backgroundColor = hasUppercase
    ? "#d1fae5"
    : "#fee2e2";
  upperCaseValidation.style.color = hasUppercase ? "#065f46" : "#991b1b";
  //   character validation
  numberValidation.style.backgroundColor = hasNumber ? "#d1fae5" : "#fee2e2";
  numberValidation.style.color = hasNumber ? "#065f46" : "#991b1b";
  // special characters validation
  specialCharValidation.style.backgroundColor = hasSpecialChar
    ? "#d1fae5"
    : "#fee2e2";
  specialCharValidation.style.color = hasSpecialChar ? "#065f46" : "#991b1b";
  //   password length validation
  passwordLengthValidation.style.backgroundColor = hasSpecialChar
    ? "#d1fae5"
    : "#fee2e2";

  passwordLengthValidation.style.color = hasSpecialChar ? "#065f46" : "#991b1b";
};

// Attach event listener to input field for real-time validation
inputField.addEventListener("input", passwordValidator);
// password validator
// 1 number

//  min 8 characters
//  1 lowercase
// 1 uppercase
// 1 special character
