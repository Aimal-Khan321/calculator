function clearScreen(){
    debugger
    document.getElementById('result').value = "";
}

function display(value){
debugger
    document.getElementById('result').value += value;
}

function calculate(){
debugger
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById('result').value = b;
}