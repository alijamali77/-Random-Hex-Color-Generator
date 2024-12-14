const Hex = document.querySelector(".Hex");
const btn  = document.querySelector(".generate");

const generateHexColor = () =>{
    //generate number btn 1 and 10
    const rand = Math.random().toString(16).substring(2,8);
    Hex.innerHTML = "#"+rand;
    document.body.style.backgroundColor = "#"+rand;
}
btn.addEventListener("click",generateHexColor);

generateHexColor();





