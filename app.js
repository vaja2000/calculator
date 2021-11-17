// create keyboard 
import { calculate } from "./opp.js"

let number1 = 0
let number2 = 0
let i = 0

const Num_CLICK = document.querySelectorAll(".NumClick")
const output = document.querySelector(".output")
for(let click of Num_CLICK){
    click.addEventListener('click', function () {
        if(output.value == "0"){
            output.value = ""
        }
        output.value += click.value
        turn_ON_OFF()
    })
}


const Arth_COMP = document.querySelectorAll(".arthCOMP")
const ARTH_PROCESS_WINDOW = document.querySelector(".arithmetic-process-window")

for(let click of Arth_COMP){
    click.addEventListener('click', function () {
        ARTH_PROCESS_WINDOW.innerText = click.innerText
        number1 = Number(output.value)
        i = Number(click.value)
        output.value = "0"
        point.disabled = false
        equality.disabled = false
    })
}

const equality = document.querySelector(".equality")
equality.addEventListener('click', function () {
    ARTH_PROCESS_WINDOW.innerText = equality.innerText
    number2 = Number(output.value)
    output.value = calculate(number1,number2,i)
    point.disabled = false
})

const clear = document.querySelector(".clear")
clear.addEventListener('click', function () {
    ARTH_PROCESS_WINDOW.innerText = ""
    output.value = "0"
    point.disabled = false
    equality.disabled = true
    turn_ON_OFF()
})

const point = document.querySelector(".point")
point.addEventListener('click', function () {
    output.value += point.value
    point.disabled = true
    turn_ON_OFF()
})

function turn_ON_OFF() {
    if(output.value != "0"){
        for(let i of Arth_COMP){
            i.disabled = false
        }
    }else {
        for(let i of Arth_COMP){
            i.disabled = true
        }
    }
}