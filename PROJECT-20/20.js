const searchBox = document.getElementById("search-box");
const searchResult = document.querySelector(".result");
const moreBtn = document.querySelector(".more");
const searchBtn = document.querySelector(".search-btn");

const key = "E43x-9_UFF6HZm_x6aNODOh7P8G_MHmt-F-sTN7V3oc";

let keyword = "";
let page = 1;

async function getImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if(page===1){
    searchResult.innerHTML="";
  }
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    console.log(imageLink)
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  moreBtn.style.display='block';
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  getImages();
});


moreBtn.addEventListener('click',()=>{
    page++;
    getImages();
})