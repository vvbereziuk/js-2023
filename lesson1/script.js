// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let b1 = true;
let b2 = false;

console.log(s1, s2, s3, s4, n1, n2, n3, n4, n5, n6, n7, b1, b2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Valentin';
let middleName = 'Vitaliiovych';
let lastName = 'Bereziuk';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let yourFirstName = prompt('Ваше імя');
let yourFatherName = prompt('По-батькові');
let yourAge = prompt('Ваш вік');
console.log(yourFirstName);
console.log(yourFatherName);
console.log(+yourAge);

