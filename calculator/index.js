function btnValue(e){
    if(e.value == "÷"){
        calculator.inputScreen.value += "/";
    }
    else if(e.value == "x"){
        calculator.inputScreen.value += "*";
    }
    else{
        calculator.inputScreen.value += e.value;
    }
}

function btnClear(){
    calculator.inputScreen.value = null;
}

function btnEqual(){
    calculator.inputScreen.value = eval(calculator.inputScreen.value);
}

function toggler(e){
    const list = document.getElementById("toggleBtn").classList;
    list.toggle("slide");
    if(list[1]=="slide"){
        document.getElementById("container").style.backgroundColor = "#333";
    }
    else{
        document.getElementById("container").style.backgroundColor = "#CCC"
    }
}