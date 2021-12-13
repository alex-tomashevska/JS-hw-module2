// // 1
// const logItems= function(array) {
//     let index = 1;
//     for (const item of array) {
//         console.log(`${index} - ${item}`);
//         index += 1;
//     }
// }
//
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
//
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
//
// // 2
// const calculateEngravingPrice = function(message, pricePerWord) {
//     const a = message.split(' ').length
// }





// 1
const logItems =function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i])
    }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// 2
const calculateEngravingPrice = function(message, pricePerWord) {
    const a = message.split(' ')
    const wordsLength = a.length
    const price= wordsLength * pricePerWord;
    return price
}
const result = (calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10));
console.log(result)


// 3
const findLongestWord = function (string) {
    const words = string.split(' ')
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord

}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))


// 4
const formatString = function (string) {
    if (string.length < 40) {
        return string
    } else {
        return string.slice(0, 39) + '...'
    }
}

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'))

// 5
const checkForSpam = function (message) {
    return !!(message.includes('spam') || message.includes('sale'));
}
console.log(checkForSpam('Latest technology news'))


// 6
let input = prompt('Введите число');
let total = 0;
const numbers = [];

for (let i = 0; i < Infinity; i++) {
    if (input === null) {
        break
    }

    const inputNumber = Number(input)

    if (!Number.isNaN(inputNumber)) {
        numbers.push(Number(input))
    } else {
        alert('Было введено не число, попробуйте еще раз')
    }
    input = prompt('Введите число')
}

if(numbers.length) {
    for (const number of numbers){
        total +=number
    }
    alert(`Общая сумма чисел равна ${total}`)
}



console.log(numbers)


// 7
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function (login){

    if (login.length >= 4 && login.length <= 16){
        return login
    }
}
const isLoginUnique = function(allLogins, login) {
     return !(allLogins.includes(login))
};

const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)){
        return('Ошибка! Логин должен быть от 4 до 16 символов')
    } else if (!isLoginUnique(allLogins, login)) {
        return('Такой логин уже используется!')
    } else {
        logins.push(login);
        return('Логин успешно добавлен!')
    }
};
console.log(addLogin(logins, 'Zodak'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'jqueryisextremelyfast'))

console.log(logins)



















