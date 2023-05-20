const botones=document.querySelectorAll("button")

const inpu=document.getElementById("ingreso")

botones.forEach( (btn) => {

    btn.addEventListener("click",() => {

        if (btn.id === "=") {
            inpu.value= eval(inpu.value)

        } else if (btn.id === "ac") {
                inpu.value=""
        } else {
            inpu.value=inpu.value + btn.id
        }
    } )
})


/* 
() => {

} 
*/

/*
eval("2+3")

*/