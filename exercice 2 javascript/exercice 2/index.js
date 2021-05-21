const text = document.querySelector("#txt");
const btnColor = document.querySelector(".color");
const btnBg = document.querySelector(".bg");
const btnBorder = document.querySelector(".border");
const btnMargin = document.querySelector(".margin");
const btnTout = document.querySelector(".tout");
 
function changer_style (){
    btnColor.addEventListener('click',() => {
        text.classList.toggle('txtcolor');
    })
    
    btnBg.addEventListener('click', () => {
        text.classList.toggle('txtbg');
    })
    
    btnBorder.addEventListener('click', () => {
        text.classList.toggle('txtborder');
    })
    
    btnMargin.addEventListener('click', () => {
        text.classList.toggle('txtmargin');
    })

    btnTout.addEventListener('click', () => {
        text.classList.toggle('active');
    })
          
}  

changer_style ();
