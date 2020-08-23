//Написать функцию, которая примет как аргументы (параметры) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
function getMaxArr(firstArr, secondArr) {
    if (sumArr(firstArr) > sumArr(secondArr)) {
        return document.write('Sum first array more: '), sumArr(firstArr);
    } else {
        return document.write('Sum second array more: '), sumArr(secondArr);
    }
}

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

document.write(getMaxArr([1, 50, 3, 'john', '33'], ['43', 80, 0, 2, 9, 6]));