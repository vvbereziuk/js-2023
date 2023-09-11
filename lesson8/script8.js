// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(122, 'Vasia', 'Ivanov', 'ivanov@ua.com', 123456789),
    new User(213, 'Vasia', 'Serduk', 'da2jb@gmail.com', +38085787478),
    new User(98, 'Kolia', 'Ivko', 'lkojb@gmail.com', +380857657478),
    new User(117, 'Nadia', 'Sirko', 'fffjb@gmail.com', +3808556478),
    new User(280, 'Olia', 'Ivanko', 'sffdb@gmail.com', +38085111478),
    new User(111, 'Sasha', 'Rybak', 'sdfssb@gmail.com', +38085000078),
    new User(64, 'Vasia', 'Kravec', 'sjb@gmail.com', +38085000478),
    new User(224, 'Kolia', 'Ichko', 'aaaab@gmail.com', +3808567478),
    new User(173, 'Vasia', 'Durko', 'adb@gmail.com', +38085565608),
    new User(88, 'Olia', 'Koval', 'rggvrjb@gmail.com', +38085556978)
]

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredID = users.filter(value => value.id % 2 === 0)
console.log(filteredID);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedId = users.sort((a, b) => a.id - b.id)
console.log(sortedId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(122, 'Vasia', 'Ivanov', 'ivanov@ua.com', +380123456789, ['milk', 'beer', 'meat']),
    new Client(213, 'Vasia', 'Serduk', 'da2jb@gmail.com', +38085787478, ['soda', 'apple', 'juice', 'icecream', 'wine']),
    new Client(98, 'Kolia', 'Ivko', 'lkojb@gmail.com', +380857657478, ['coffe']),
    new Client(117, 'Nadia', 'Sirko', 'fffjb@gmail.com', +3808556478, ['milk', 'beer', 'meat', 'vodka', 'wine']),
    new Client(280, 'Olia', 'Ivanko', 'sffdb@gmail.com', +38085111478, ['milk', 'beer', 'apple', 'meat']),
    new Client(111, 'Sasha', 'Rybak', 'sdfssb@gmail.com', +38085000078, ['milk', 'beer', 'meat']),
    new Client(64, 'Vasia', 'Kravec', 'sjb@gmail.com', +38085000478, ['milk', 'cola', 'beer', 'meat']),
    new Client(224, 'Kolia', 'Ichko', 'aaaab@gmail.com', +3808567478, ['milk', 'beer', 'meat']),
    new Client(173, 'Vasia', 'Durko', 'adb@gmail.com', +38085565608, ['milk', 'beer', 'meat']),
    new Client(88, 'Olia', 'Koval', 'rggvrjb@gmail.com', +38085556978, ['milk'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, maker, year, maxSpeed, engineVolume) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    this.info = () => console.log(`${this.model} ${this.maker} ${this.maxSpeed} ${this.engineVolume}`)
    this.increaseMaxSpeed = (newSpeed) => console.log(this.maxSpeed += newSpeed);
    this.changeYear = (newValue) => console.log(this.year = newValue);
    this.addDriver = (driver) => console.log(this.driver = driver);
}

let car = new Car('Rav4', 'Toyota', 2022, 250, 2.5);
car.drive()
car.info()
car.increaseMaxSpeed(50)
car.changeYear(2023)
car.addDriver({name: 'Vasia', age: 30})


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, maker, year, maxSpeed, engineVolume) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        this.info = () => console.log(`${this.model} ${this.maker} ${this.maxSpeed} ${this.engineVolume}`)
        this.increaseMaxSpeed = (newSpeed) => console.log(this.maxSpeed += newSpeed);
        this.changeYear = (newValue) => console.log(this.year = newValue);
        this.addDriver = (driver) => console.log(this.driver = driver);
    }
}

car2 = new Car2('X7', 'BMW', 2023, 250, 3);
car2.drive()
car2.info()
car2.increaseMaxSpeed(50)
car2.changeYear(2024)
car2.addDriver({name: 'Kolia', age: 25})
console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cenderella extends Human {
    constructor(name, age, footsize) {
        super(name, age)
        this.footsize = footsize;
    }

}


class Prince extends Human {
    constructor(name, age, bootsize) {
        super(name, age)
        this.bootsize = bootsize;
    }
    findPrinces1(arr) {
        for (const cenderella of arr) {
            if (cenderella.footsize === this.bootsize){
                return cenderella
            }

        }
    }

    findPrinces2(arr) {
         return arr.find((cenderella) => cenderella.footsize === this.bootsize)
    }
}


let searhCenderella = [
    new Cenderella('Yuliia', 35, 36),
    new Cenderella('Sasha', 8, 33),
    new Cenderella('Olia', 42, 42),
    new Cenderella('Yuliia', 21, 34),
    new Cenderella('Valia', 27, 38),
    new Cenderella('Zina', 40, 39),
    new Cenderella('Dasha', 31, 35),
    new Cenderella('Zina', 20, 31),
    new Cenderella('Dasah', 7, 30),
    new Cenderella('Katia', 18, 37)
];

let prince = new Prince('Valentyn', 36, 36 )

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(prince.findPrinces1(searhCenderella));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(prince.findPrinces2(searhCenderella));