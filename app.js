let display = document.querySelector("#display")
let buttons = document.querySelectorAll("button")

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let value = btn.innerHTML;
        console.log(value);

        if(value === "C"){
        display.value = ""
        }
        else if(value === "="){
            try{
                display.value = eval(display.value);

            }
            catch{
                display.value = "xato kiritish!";
            }
        }
        else if(btn.classList.contains("delete")){
            display.value = display.value.slice(0,-1);
        }
        else{
            display.value += value;
        }
    })
})