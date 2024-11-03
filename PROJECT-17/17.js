var image = document.querySelector(".moon"); // Get the image element
let stylesheet = document.getElementById("mysheet"); // Get the original stylesheet

function addNew() {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "17b.css"; 

  link.id = "newStylesheet"; 
  document.head.appendChild(link); 
}

image.addEventListener("click", () => {
  let newStylesheet = document.getElementById("newStylesheet"); 

  if (stylesheet.disabled) {
    stylesheet.disabled = false;

    if (newStylesheet) {
      newStylesheet.remove();
    }

    image.src = "images/moon.png";
  } 
  else {
    stylesheet.disabled = true;

    if (!newStylesheet) {
      addNew();
    }

    image.src = "images/sun.png";
  }
});








/*
var image = document.querySelector(".moon");
let stylesheet = document.getElementById("mysheet");



function addNew() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "17b.css";
  
    document.body.appendChild(link);
  }


  image.addEventListener("click", () => {
      stylesheet.disabled = true;
  
      addNew();
    if(stylesheet.disabled){
  
      image.src = "images/sun.png";
    }
    else{
        stylesheet.disabled=false
      image.src = "images/moon.png";

    }

    });


image.addEventListener('click',()=> {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    image.src = "images/sun.png";
  } else {
    image.src = "images/moon.png";
  }
});
*/