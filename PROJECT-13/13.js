var nameError = document.getElementById("name-error");
var phnError = document.getElementById("phn-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateNum() {
  var no = document.getElementById("contact-num").value;
  if (no.length == 0) {
    phnError.innerHTML = "Phone no is required";
    return false;
  }
  if (no.length !== 10) {
    phnError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!no.match(/^[0-9]{10}$/)) {
    phnError.innerHTML = "Only digits";
    return false;
  }
  phnError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMail() {
  var mail = document.getElementById("mail").value;
  if (mail.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMsg() {
  var msg = document.getElementById("msg").value;

  while (msg.length < 30) {
    msgError.innerHTML = ` ${30 - msg.length} more characters required`;
    return false;
  }
  msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateNum() || !validateMail() || !validateMsg()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error";
    setTimeout(function () {submitError.style.display = "none";}, 3000);
    return false
  }
}
