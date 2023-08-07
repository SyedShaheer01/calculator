
var screen = document.getElementById("screen")
var calculator = document.getElementsByClassName("calculator")
function num(number){
    if(number === "="){
        if(screen.value.slice(-1) == "+" || screen.value.slice(-1) == "-" || screen.value.slice(-1) == "*" || screen.value.slice(-1) == "/"){
            screen.value
        }else{
            var output = eval(screen.value)
            if(output == undefined){
                screen.value = ""
            }else{
                screen.value = output
            }
        }
        
    }else if(number === "X"){
       screen.value = screen.value.slice(0,-1)
    }else if(number === "C"){
       screen.value = ""
    }else if(screen.value.slice(-1) == "+" && number == "+" || screen.value.slice(-1) == "-" && number == "-" || screen.value.slice(-1) == "*" && number == "*" || screen.value.slice(-1) == "/" && number == "/" || screen.value.slice(-1) == "." && number == "." || screen.value.slice(-1) == "%" && number == "%"){
        screen.value
    }else if(screen.value == "" && number == "+" || screen.value == "" && number == "*" || screen.value == "" && number == "/" || screen.value == "" && number == "%"){
        screen.value = ""
    }else if(screen.value == "" && number == "."){
        screen.value += "0."
    }else{
        screen.value += number
    }

}