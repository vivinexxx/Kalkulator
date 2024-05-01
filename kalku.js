function dis(val) {
    document.getElementById("result").value += val;
}

function clr() {
    document.getElementById("result").value = '';
}

function calcu() {
    let equation = document.getElementById("result").value;
    let result = eval(equation);
    document.getElementById("result").value = result;
}

