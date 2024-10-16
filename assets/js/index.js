

const mainArrow = document.getElementById("scroll_button");
const arrow = document.querySelector("i");
const buttonMain = document.querySelector("button");
const nightDayButton = document.querySelector("#nightDayMode");
const body = document.querySelector("body");
let darkMode = false;

arrow.addEventListener("mouseover", ()=>{
  arrow.classList.add("arrow_color");
})

arrow.addEventListener("mouseleave", ()=>{
  console.log("couleur");
  arrow.classList.remove("arrow_color");
})

//  Fonction pour défilement en cliquant sur la flèche du header

function scrollToNav() {
  return window.scrollTo(
    {
      top : 700,
      behavior :"smooth" 
  });
};

mainArrow.addEventListener("click", scrollToNav);

function switchDark(){
  body.classList.add("night_mode_body");
  nightDayButton.textContent = "Light";
  darkMode = true;
  console.log(darkMode);
  
}

function switchLight(){
  body.classList.remove("night_mode_body");
  nightDayButton.textContent = "Dark";
  darkMode = false;
  console.log(darkMode);
}


nightDayButton.addEventListener("click",switchDark);

if(darkMode==true){

  nightDayButton.addEventListener("click",switchLight);
}
