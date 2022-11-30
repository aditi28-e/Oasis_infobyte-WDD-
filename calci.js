var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

// this is for the sin function of the calculator
function sin() {
    screen.value = Math.sin(screen.value);
}

// this is for the cos function of the calculator
function cos() {
    screen.value = Math.cos(screen.value);
}

// this is for the tan function of the calculator
function tan() {
    screen.value = Math.tan(screen.value);
}

// this is for the power function of the calculator
function pow() {
    screen.value = Math.pow(screen.value, 2);
}

// this is for the square root function of the calculator
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

// this is for the logarithmic function of the calculator
function log() {
    screen.value = Math.log(screen.value);
}

// this is for the value of pi  in the calculator
function pi() {
    screen.value = 3.14159265359;
}

// this is for the exponential value in  the calculator
function e() {
    screen.value = 2.71828182846;
}

// this is for the factorial  function of the calculator
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

// this is for the subtraction  function of the calculator
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
