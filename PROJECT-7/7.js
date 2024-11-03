const apiUrl = "https://quotes-api-self.vercel.app/quote";
const newBtn = document.querySelector(".js-btn");
const qHtml = document.querySelector(".qDiv");
const q = document.querySelector(".quo");
const a = document.querySelector(".aut");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  q.innerHTML = data.quote;
  a.innerHTML = data.author;
}
/*qHtml.innerHTML = `
     <blockquote class="quo">${data.quote}</blockquote>
        <span class="aut">${data.author}</span>`;
}
        */
newBtn.addEventListener("click", () => {
  getQuote(apiUrl);
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      q.innerHTML +
      "------ by " +
      a.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}

document.querySelector(".tBtn").addEventListener("click", () => {
  tweet();
});
