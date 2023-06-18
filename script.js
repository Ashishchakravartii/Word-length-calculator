let form= document.querySelector("form");
let outH3= document.querySelector(".outH3");
form.addEventListener("submit",(event)=>{
    event.preventDefault()
   let str= event.target[0].value;
   outH3.innerHTML=(str.length)
})