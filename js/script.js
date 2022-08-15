let ulLinks = document.querySelector("header .container .links ul");
let mySpan = document.querySelector("header .container .links .icon span:nth-child(2)");

function dropIt(){
        ulLinks.setAttribute("style","display:block;");            
        mySpan.setAttribute("style","width:100% ;");
    }
function pickIt(){
        ulLinks.removeAttribute("style");
        mySpan.removeAttribute("style");
}

document.addEventListener("click",function(e){
    if(e.target.classList.contains("icon")){
        if(ulLinks.hasAttribute("style")){
            pickIt();
        }else{
        dropIt();
        }
    }
    if(!e.target.classList.contains("icon")){
        pickIt();
    }
});