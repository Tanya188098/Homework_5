//Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;

        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;

        case '/':
            result = x / y;
            break;

        case '%':
            result = x % y;
            break;

        case '^':
            result = x ** y;
            break;
    }
    return result;
}

document.write(doMath(6, '+', 10) + '<br>');
document.write(doMath(6, '-', 10) + '<br>');
document.write(doMath(6, '*', 10) + '<br>');
document.write(doMath(6, '/', 10) + '<br>');
document.write(doMath(6, '%', 10) + '<br>');
document.write(doMath(6, '^', 2) + '<br>');