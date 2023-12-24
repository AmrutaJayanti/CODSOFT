let res = 0;

document.querySelector('.plus').addEventListener('click', function () {
    Perform('add');
});

document.querySelector('.minus').addEventListener('click', function () {
    Perform('minus');
});

document.querySelector('.mul').addEventListener('click', function () {
    Perform('mul');
});

document.querySelector('.div').addEventListener('click', function () {
    Perform('div');
});

document.querySelector('.clr').addEventListener('click', function () {
    Perform('clr');
});
document.querySelector('.equal').addEventListener('click', function () {
    Perform('equal');
});

document.querySelectorAll('.num button').forEach(function (button) {
    button.addEventListener('click', function (event) {
        let num = parseFloat(event.target.textContent);
        Perform('equal', num);
    });
});

function Perform(operation, num) {

    switch (operation) {
        case 'add':
            res += num;
            break;
        case 'minus':
            res -= num;
            break;
        case 'mul':
            res *= num;
            break;
        case 'div':
            res /= num;
            break;
        case 'equal':
            res = num;
            break;

        case 'clr':
            res = 0;
            break;



    }
    document.querySelector('.Screen').textContent = res;
}