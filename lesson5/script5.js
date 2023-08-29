// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b
console.log(rectangleArea(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (h, r) => Math.PI * h * r;
console.log(circleArea(10, 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);
console.log(cylinderArea(12, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
let iterArray = (array, i) => {
    console.log(array [i])
    i++;
    if (i < array.length) {
        iterArray(array, i)
    }
}
iterArray([arr], 0);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let chapter = text => document.write(`<div><p>${text}</p></div>`)
chapter('Hello this wonderful world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listLi = (liElement) => {
    document.write(`<ul>`)
    document.write(`<li>${liElement}</li> <li>${liElement}</li> <li>${liElement}</li> `)
    document.write(`</ul>`)
}

listLi('Holla amigos!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list1 = (liElement, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${liElement}</li>`)
    }
    document.write(`</ul>`)
}
list1('Blimey!', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let funPrim = (primitiveEl) => {
    document.write(`<ul>`)
    for (const arrElement of primitiveEl) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

funPrim([1, 'go', true, 4, 'fun'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 0, name: 'Olia', age: 90},
    {id: 5, name: 'Kolia', age: 41},
    {id: 7, name: 'Sasha', age: 8},
    {id: 2, name: 'Yuliia', age: 35},
    {id: 5, name: 'Andrii', age: 31}
];

let usersBlock = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>ID: ${arrElement.id} NAME: ${arrElement.name} AGE: ${arrElement.age}</div>`)
    }
}
usersBlock(users)

// - створити функцію яка повертає найменьше число з масиву
let numbers = [25, -10, 0, 125, -21, 10, -87];

let minNumber = (arr) => {
    let minResult = arr [0]
    for (const number of arr) {
        if (number < minResult) {
            minResult = number
        }
    }
    return minResult
}
console.log(minNumber(numbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbersArr = [25, 10, 0, -25, -10, 100, 15];

let sumNumbers = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        //або
        // sum += arr[i]
    }
    return sum
}

console.log(sumNumbers(numbersArr))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbersArr1 = [25, 10, 0, -25, -10, 100, 15]

let swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

console.log(swap(numbersArr1, 0, 1))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sum, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            sum = sum / currencyValues[i].value
        }
    }
    return `${sum} ${exchangeCurrency}`
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))
