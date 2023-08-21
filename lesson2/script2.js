// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let random = [12, 'vacancy', 2.14, false, -100, 0, 'top', true, 1, 3, 14];
console.log(random)
// or
console.log(random[0]);
console.log(random[1]);
console.log(random[2]);
console.log(random[3]);
console.log(random[4]);
// .....

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter',
    pageCount: 560,
    genre: 'Fantasy'
}
let book2 = {
    title: 'The Happiest Man on Earth',
    pageCount: 325,
    genre: 'Documantary'
}
let book3 = {
    title: 'Fahrenheit 451',
    pageCount: 370,
    genre: 'Dystopian novel'
}
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Harry Potter',
    pageCount: 560,
    genre: 'Fantasy',
    author: [
        {name: 'J. K. Rowling', age: 57}
    ]
}

let book5 = {
    title: 'The Happiest Man on Earth',
    pageCount: 325,
    genre: 'Documantary',
    author: [
        {name: 'Eddie Jaku', age: 102}
    ]
}

let book6 = {
    title: 'Fahrenheit 451',
    pageCount: 370,
    genre: 'Dystopian novel',
    author: [
        {name: 'Ray Bradbury', age: 87}
    ]
}
console.log(book5.author [0]);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let clients = [
    {name: 'Vasia', username: 'vas10', password: '111sd1'},
    {name: 'Kolia', username: 'Koliasik', password: '02213K'},
    {name: 'Ivan', username: 'use12', password: '0jnaw1'},
    {name: 'Sasha', username: 'sasha120', password: '9as9kn'},
    {name: 'Natali', username: 'Nata88', password: 'mmmm23'},
    {name: 'Olia', username: 'Ollll', password: '111kj1'},
    {name: 'Zhenia', username: 'Zhzhz', password: '7sgy6f'},
    {name: 'Serhii', username: 'Rocky', password: 'jnw98'},
    {name: 'Yliia', username: 'Gorge', password: '28bsu7'},
    {name: 'Pavlo', username: 'Kosis', password: 'km9bu7'}
];
for (let i = 0; i < clients.length; i++) {
    console.log(clients [i].password);
}

// OR

console.log(clients[0].password);
console.log(clients[1].password);
console.log(clients[2].password);
console.log(clients[3].password);
console.log(clients[4].password);
console.log(clients[5].password);
console.log(clients[6].password);
console.log(clients[7].password);
console.log(clients[8].password);
console.log(clients[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3

let x = -3;
if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

let time = 44;
if (time >= 0 && time <= 14) {
    console.log('Перша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('Друга чверть');
} else if (time >= 30 && time <= 44) {
    console.log('Третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть');
} else {
    console.log('Введіть число від 0 до 59')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 10;
if (day >= 0 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 21) {
    console.log('Друга декада');
} else if (day >= 22 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Введіть число від 0 до 31')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekDay = 7;
switch (weekDay) {
    case 1 :
        console.log('10:00 - Зустріч з клієнтом');
        break;
    case 2 :
        console.log('12:00 - Похід в спортзал');
        break;
    case 3 :
        console.log('07:00 - Рибалка');
        break;
    case 4 :
        console.log('15:00 - Зустріч з клієнтом');
        break;
    case 5 :
        console.log('06:00 - Поїздка на дачу');
        break;
    case 6 :
        console.log('19:00 - Похід в ресторан');
        break;
    case 7 :
        console.log('20:00 - Похід в кіно');
        break;
    default :
        console.log('Введіть день тижня')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 12;
let b = 2;

if (a > b) {
    console.log('Більше число', a);
} else if (a < b) {
    console.log('Більше число', b);
} else {
    console.log(a = b);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// задопомогою оператора || буде присвоювати змінній х значення "default", якщо значення змінної х являється
// falsy
let s = null;
if (s == null || s == undefined || s == 0 || s == '' || s == false || s == NaN) {
    console.log(s = 'default');
}

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log([i], 'Супер!')
    }
}


