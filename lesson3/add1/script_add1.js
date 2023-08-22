// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr = [1, 2, 3, 4, 5];
let arr2 = ['1', '2', '3', '4', '5'];
let arr3 = ['hello', true, 100, false, 'world'];
console.log(arr, arr2, arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'];
console.log(arr4[2]);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr5.length) {
    console.log(arr5[i]);
    i++;
}
//     2. перебрати його циклом for
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i1 = 0;
while (i1 < arr5.length) {
    console.log(arr5[i1]);
    i1 += 2;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr5.length; i += 2) {
    console.log(arr5[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i2 = 1;
while (i2 < arr5.length) {
    console.log(arr5[i2]);
    i2 += 2;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 1; i < arr5.length; i += 2) {
    console.log(arr5[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr5.length; i++) {
//     if (arr5[i] % 3 == 0) {
//         arr5[i] = 'okten';
//     }
// }
// console.log(arr5);

// 8. вивести масив в зворотньому порядку.
for (let i = arr5.length - 1; i >= 0; i--) {
    console.log(arr5[i]);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr7 = ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'];
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr8 = ['mysql', 2, true, 'world', 'js', 5, 6, 7, false, 100];
for (let i = 0; i < arr8.length; i++) {
    console.log(arr8[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr9 = ['mysql', 2, true, 'world', 'js', 5, 6, 7, false, 100];
for (let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i] === 'boolean') {
        console.log(arr9[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr10 = ['mysql', 2, true, 'world', 'js', 5, 6, 7, false, 100];
for (let i = 0; i < arr10.length; i++) {
    if (typeof arr10[i] === 'number') {
        console.log(arr10[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr11 = ['mysql', 2, true, 'world', 'js', 5, 6, 7, false, 100];
for (let i = 0; i < arr11.length; i++) {
    if (typeof arr11[i] === 'string') {
        console.log(arr11[i]);
    }
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10; i++) {
    console.log("Крок:", i);
    document.write("Крок: " + i + "<br>");
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 100; i++) {
    console.log('Крок:', i);
    document.write('Крок: ' + i + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j <= 100; j += 2) {
    console.log('Крок:', j);
    document.write('Крок :', +j + '<br>');
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "Book 1",
        pages: 200,
        authors: ["Author 1", "Author 2"],
        genres: ["Fiction", "Mystery", "Suspense"]
    },
    {
        title: "Book 2",
        pages: 350,
        authors: ["Author 3"],
        genres: ["Fantasy", "Adventure", "Science Fiction", "Romance"]
    },
    {
        title: "Book 3",
        pages: 150,
        authors: ["Author 4", "Author 5"],
        genres: ["Science Fiction"]
    },
    {
        title: "Book 4",
        pages: 200,
        authors: ["Author 1", "Author 2"],
        genres: ["Fiction"]
    },
    {
        title: "Book 5",
        pages: 350,
        authors: ["Author 3"],
        genres: ["Fantasy", "Adventure", "Mystery", "Fiction", "Historical Fiction"]
    },
    {
        title: "Book 6",
        pages: 150,
        authors: ["Author 4", "Author 5"],
        genres: ["Science Fiction"]
    },
    {
        title: "Book 7",
        pages: 280,
        authors: ["Author 6"],
        genres: ["Historical Fiction", "Romance"]
    },
    {
        title: "Book 8",
        pages: 410,
        authors: ["Author 7"],
        genres: ["Thriller"]
    },
];

// -знайти книжку де найбільше сторінок.

let bookMaxPages = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > bookMaxPages.pages) {
        bookMaxPages = books[i];
    }
}
document.write(`<div>Книга де найбільше сторінок: ${bookMaxPages.title}  в ній ${bookMaxPages.pages} сторінок</div>`);

// - знайти книжку/ки з найбільшою кількістю жанрів
let bookMaxGenres = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > bookMaxGenres.genres.length) {
        bookMaxGenres = books[i];
    }
}
document.write(`<div>Книга де найбільше жанрів: ${bookMaxGenres.title}  в ній ${bookMaxGenres.genres.length} жанрів</div>`);
// - знайти книжку/ки з найдовшою назвою


// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

