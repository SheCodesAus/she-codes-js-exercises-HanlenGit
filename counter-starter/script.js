function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}
function sub(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}
function mul(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
    console.log(number);
}
function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
    console.log(number);
}