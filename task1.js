//Написать функцию заполнения двумерного массива. Имя произвольное.

function arrayAdd(n, m) {
    let A = [];
    for (let i = 0; i < n; i++) {
        A[i] = [];
        for (let j = 0; j < m; j++) {
            let randomNum = Math.round(Math.random() * 100);
            A[i].push(randomNum);
        }
    }
    return A;
}

document.write(arrayAdd(4, 4));