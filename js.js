
function calculat(newValue) {
    document.getElementById("result").value += newValue;
}
function deletLast() {
    let a = document.getElementById('result');  
    a.value = a.value.slice(0, -1);
    // let b = a.value.slice(0, -1);
    
}
function answer() {
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById('result').value = b;
}
function delet() {
    document.getElementById('result').value = " ";
}
