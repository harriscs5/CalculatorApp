

//Display function: This values clicked is the parameter for this funtion and returns as the same in the textbox.

function display(val) {
    document.getElementById('result').value += val; 
    return val;
}


//Solve function: This function is called once the user clicks the = operator.

function solve() {
    let x = document.getElementById('result').value; 
    let y = eval(x);
    document.getElementById('result').value = y;

    return y;

}

//ClearScreen method: This function is called when the user clicks the clear button. 

function clearScreen() {
    document.getElementById('result').value = "";
}