const passwordBox = document.getElementById("answer");

function generatePassword(length) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+~{}|?:<>`-=[];,./";
  const allChars = upperCase + lowerCase + numbers + specialChars;

  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
}

document.querySelector(".btn").addEventListener("click", () => {
  const password = generatePassword(12);
  passwordBox.value = password;
});

document.querySelector(".imgs").addEventListener("click", () => {
  copyPassword();
});
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
