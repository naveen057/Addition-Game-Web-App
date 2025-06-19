let f = document.getElementById('firstNumber');
let s = document.getElementById('secondNumber');
f.textContent = Math.ceil(Math.random() * 1000);
s.textContent = Math.ceil(Math.random() * 1000);

function check() {
    let num1 = parseInt(f.textContent);
    let num2 = parseInt(s.textContent);
    let u = document.getElementById('userInput').value;
    let p = document.getElementById('gameResult');
    let sum = num1 + num2;
    let con = parseInt(u);
    if (sum === con) {
        p.style.backgroundColor = '#028a0f'
        p.textContent = 'Congratulations! You got it right.';
    } else if (sum !== con) {
        p.textContent = 'Please Try Again!'
        p.style.backgroundColor = '#1e217c'
    }

}

function reset() {
    let u = document.getElementById('userInput').value = '';
    let p = document.getElementById('gameResult');
    p.textContent = "";
}