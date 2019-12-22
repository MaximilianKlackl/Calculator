let calculation = "";
const calcDiv = document.getElementById("calc-span");
const resultDiv = document.getElementById("result-span");
let newCalc = false;

document.addEventListener("keypress", keyPress, false);
document.addEventListener("keydown", keyPressDown, false);

function keyPressDown(e)
{
    let sign = String.fromCharCode(e.keyCode);

    if(e.keyCode == 8)
    {
        calculation = calculation.substr(1);
        calcDiv.innerHTML = calculation;
    }
    if(e.keyCode == 13)
    {
        calcDiv.innerHTML = calculation;
        resultDiv.innerHTML = eval(calculation);
        newCalc = true;
    }
}

function keyPress(e) {

    let sign = String.fromCharCode(e.keyCode);

    if(newCalc)
    {
        calculation = "";
        newCalc = false;
    }

    if(sign == "="){
        resultDiv.innerHTML = eval(calculation);
        newCalc = true;
    }
    else{
        calculation += sign;
        calcDiv.innerHTML = calculation;
    }

}


function append(e)
{
    let sign = e.srcElement.innerHTML;
    if(sign == "×")
    {
        sign = "*";
    }

    if(sign == "÷")
    {
        sign = "/";
    }

    if(newCalc)
    {
        calculation = "";
        newCalc = false;
    }

    if(sign == "="){
        resultDiv.innerHTML = eval(calculation);
        newCalc = true;
    }
    else{
        calculation += sign;
        calcDiv.innerHTML = calculation;
    }
}

