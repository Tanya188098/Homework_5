//Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
//	func("hello world", ['l', 'd']) // вернет нам "heo wor"

function deleteСharacters(string, characters) {
    for (let i = 0; i < characters.length; i++) {
        let find = characters[i];
        let re = new RegExp(find, 'g');
        string = string.replace(re, '');
    }
    return string;
}

document.write(deleteСharacters('Hello world', ['l', 'd']));