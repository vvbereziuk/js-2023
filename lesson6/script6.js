// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase(), str5.toLowerCase(), str6.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   '
console.log(str7.trim());


// - На пишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']//
let str = 'Ревуть воли як ясла повні';
let stringToArray = str.split(' ')
console.log(stringToArray);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNumb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrToString = arrNumb.map(value => value.toString())
// або
// let arrToString = arrNumb.map(value => String(value));
// або
// let arrToString = arrNumb.map(arrNumb => '' + arrNumb);
console.log(arrToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a)
    }
    return nums;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let mouthDurationDecline = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
})
console.log(mouthDurationDecline)

// АБО
// console.log(coursesAndDurationArray.sort((a, b) => {
//     if( a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if(a.monthDuration > b.monthDuration){
//         return -1;
//     }
//     if(a.monthDuration === b.monthDuration)
//         return 0
// }))


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let mouthDurationFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(mouthDurationFilter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mouthDurationId = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value}
})
console.log(mouthDurationId)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {value: '6', cardSuit: 'diamonds', color: 'red'},
    {value: '6', cardSuit: 'hearts', color: 'red'},
    {value: '6', cardSuit: 'clubs', color: 'black'},
    {value: '6', cardSuit: 'spades', color: 'black'},
    {value: '7', cardSuit: 'clubs', color: 'black'},
    {value: '7', cardSuit: 'spades', color: 'black'},
    {value: '7', cardSuit: 'diamonds', color: 'red'},
    {value: '7', cardSuit: 'hearts', color: 'red'},
    {value: '8', cardSuit: 'hearts', color: 'red'},
    {value: '8', cardSuit: 'clubs', color: 'black'},
    {value: '8', cardSuit: 'spades', color: 'black'},
    {value: '8', cardSuit: 'diamonds', color: 'red'},
    {value: '9', cardSuit: 'clubs', color: 'black'},
    {value: '9', cardSuit: 'diamonds', color: 'red'},
    {value: '9', cardSuit: 'hearts', color: 'red'},
    {value: '9', cardSuit: 'spades', color: 'black'},
    {value: '10', cardSuit: 'diamonds', color: 'red'},
    {value: '10', cardSuit: 'spades', color: 'black'},
    {value: '10', cardSuit: 'clubs', color: 'black'},
    {value: '10', cardSuit: 'hearts', color: 'red'},
    {value: 'J', cardSuit: 'diamonds', color: 'red'},
    {value: 'J', cardSuit: 'hearts', color: 'red'},
    {value: 'J', cardSuit: 'spades', color: 'black'},
    {value: 'J', cardSuit: 'clubs', color: 'black'},
    {value: 'Q', cardSuit: 'hearts', color: 'red'},
    {value: 'Q', cardSuit: 'clubs', color: 'black'},
    {value: 'Q', cardSuit: 'spades', color: 'black'},
    {value: 'Q', cardSuit: 'diamonds', color: 'red'},
    {value: 'K', cardSuit: 'clubs', color: 'black'},
    {value: 'K', cardSuit: 'diamonds', color: 'red'},
    {value: 'K', cardSuit: 'spades', color: 'black'},
    {value: 'K', cardSuit: 'hearts', color: 'red'},
    {value: 'A', cardSuit: 'hearts', color: 'red'},
    {value: 'A', cardSuit: 'clubs', color: 'black'},
    {value: 'A', cardSuit: 'diamonds', color: 'red'},
    {value: 'A', cardSuit: 'spades', color: 'black'}


]
// - знайти піковий туз
let diamondsAce = cards.find(val => val.cardSuit === 'spades' && val.value === 'A');
console.log(diamondsAce)

// - всі шістки
let sixTh = cards.filter(val => val.value === '6');
console.log(sixTh);

// - всі червоні карти
let redCards = cards.filter(val => val.color === 'red');
console.log(redCards);

// - всі буби
let diamondsCards = cards.filter(val => val.cardSuit === 'diamonds')
console.log(diamondsCards);

// - всі трефи від 9 та більше
let clubsCards = cards.filter(val => val.cardSuit === 'clubs' && val.value >= '9')
console.log(clubsCards);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardSuit = cards.reduce((accum, currentValue) => {
    if (currentValue.cardSuit === 'spades') {
        accum.spades.push(currentValue)
    }
    if (currentValue.cardSuit === 'diamonds') {
        accum.diamonds.push(currentValue)
    }
    if (currentValue.cardSuit === 'hearts') {
        accum.hearts.push(currentValue)
    }
    if (currentValue.cardSuit === 'clubs') {
        accum.clubs.push(currentValue)
    }
    return accum
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(cardSuit);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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

// --написати пошук всіх об'єктів, в який в modules є sass
let sassModules = coursesArray.filter(value => value.modules.includes('sass'))
console.log(sassModules);

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerModules = coursesArray.filter(value => value.modules.includes('docker'))
console.log(dockerModules);

