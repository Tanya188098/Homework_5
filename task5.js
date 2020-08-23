//Напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]

var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 === 0;
} // проверяет на четность

function filter(isEven, arr) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

document.write(filter(isEven, input));
