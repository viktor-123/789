document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('input');
    let button = document.getElementById('button');
    let div = document.getElementById('div');
    let current = 0;
    let timer;
    function startTimer() {
        div.textContent = --current;
        if (current <= 0)
        timer = clearInterval(timer);
    }
    function onClick() {
        timer = clearInterval(timer);
        current = +input.value;
        if (current) {
            div.textContent = current;
            timer = setInterval(startTimer, 1000);
        }
    }
    button.addEventListener('click', onClick);
});

document.addEventListener("DOMContentLoaded", function() {
    let input = document.createElement("input");
    document.body.append(input);
    let h2 = document.createElement("h2");
    document.body.append(h2);
    let timeout;
    function enteringText() {
        let text = input.value;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            h2.innerHTML = text;      
        }, 300);
    }
    input.addEventListener("input", enteringText);
});