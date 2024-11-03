function calculateAge(dStr) {
  let [year, month, day] = dStr.split("-");
  let dob = new Date(year, month - 1, day);
  let today = new Date();
  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
}
const ageDiv = document.querySelector(".a");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const calBtn = document.querySelector(".btn");
calBtn.addEventListener("click", () => {
  const age = calculateAge(userInput.value);
  ageDiv.innerHTML = `
    <p>
         You are <span>${age.years}</span> years, <span>${age.months}</span> months and
         <span>${age.days}</span> days old
       </p>`;
});
