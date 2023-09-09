// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    let arr = [];
    for (let i = 0; i < str.length; i += n)
        arr.push(str.slice(i, i + n))
    return arr
}

console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';

function delete_characters(str, length) {
    return str.slice(0, length)
}

console.log(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str1 = "HTML JavaScript PHP";

function insert_dash(str) {
    return str.toUpperCase().split(' ').join('-')
}

console.log(insert_dash(str1))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'

function normalize(str) {
    let arr = str.split(' ')
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return arr1.join(' ')
}

console.log(normalize('jeki chan'))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomNums() {
    let arr = []
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

console.log(randomNums())

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randomSort = randomNums().sort((a, b) => a - b)
console.log(randomSort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа (без 0!)
let randomFilter = randomNums().filter((a) => a % 2 === 0)
console.log(randomFilter)

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str) {
    let arr = str.split(' ')
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return arr1.join(' ')
}

console.log(capitalize('good morning, how are you?'))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
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
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
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
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
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
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length
}))

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let symb = 'о'
let str2 = "Астрономия это наука о небесных объектах"

function count(str, stringsearch) {
    for (const strElement of str) {
        if (strElement === stringsearch) {
            return str.split(stringsearch).length - 1
        }
    }
}

console.log(count(str2, symb))


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str3 = "Сила тяжести приложена к центру масс тела";

function cutStringWord(str, n) {
    return str.split(' ').slice(0, n).join(' ')
}

console.log(cutStringWord(str3, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: "Пригоди Тома Сойєра",
        pageCount: 224,
        authors: ["Марк Твен"],
        genres: ["Пригоди", "Класика"]
    },
    {
        title: "Гра Престолів",
        pageCount: 694,
        authors: ["Джордж Мартін"],
        genres: ["Фентезі"]
    },
    {
        title: "Чорне Лебедя: Вплив непередбачуваних подій",
        pageCount: 464,
        authors: ["Нассім Талеб"],
        genres: ["Наука", "Філософія"]
    },
    {
        title: "Війна і мир",
        pageCount: 1225,
        authors: ["Лев Толстой"],
        genres: ["Роман", "Історичний"]
    },
    {
        title: "Шерлок Холмс: Пригоди",
        pageCount: 480,
        authors: ["Артур Конан Дойл"],
        genres: ["Детектив", "Містика", "Пригоди", "Класика"]
    },
    {
        title: "Гордість і упередження",
        pageCount: 432,
        authors: ["Джейн Остін"],
        genres: ["Роман", "Комедія"]
    },
    {
        title: "Місто скал",
        pageCount: 368,
        authors: ["Касандра Клер"],
        genres: ["Фентезі", "Пригоди"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["Джордж Оруелл"],
        genres: ["Наукова фантастика", "Антиутопія"]
    }
];

// -знайти найбльша кількість сторінок.
let maxPageCount = function () {
    let max = 0;
    for (const value of books) {
        if (value.pageCount > max) {
            max = value.pageCount
        }
    }
    return max
}
console.log(maxPageCount())

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню