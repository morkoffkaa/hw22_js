//  1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info() {
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
}




// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.

// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


class Auto {
    constructor(carBrand, model, year, carNumber) {
        this.carBrend = carBrand;
        this.model = model;
        this.year = year;
        this.carNumber = carNumber;
    }

    owner = null;

    setOwner(humanInstance) {
        if (humanInstance.age < 18) {
            console.log(`${humanInstance.name} You are not allowed to be a car owner!`)
        } else {
            this.owner = humanInstance;
        }
    }

    info() {
        console.log(`Brand: ${this.carBrend}; Model: ${this.model}; Year: ${this.year}; Plate: ${this.carNumber}`);

        if (this.owner) {
            console.log("Owner:");
            this.owner.info();
        } else {
            console.log("Owner is not defined!");
        }
    }
}

const oleg = new Human('Oleg', '15');
const yana = new Human('Yana', '22');
const diana = new Human('Diana', '25');

const bmw = new Auto('bmw', 'x5', '2020', 'CA2789EC');
const vw = new Auto('volkswagen', 'golf', '2022', 'DF2776OP');
const hyundai = new Auto('hyundai', 'elantra', '2013', 'GY5673BH');
const toyota = new Auto('toyota', 'rav4', '2023', 'TY5678BH');

bmw.setOwner(yana);
bmw.info();
vw.setOwner(oleg);
vw.info();
hyundai.setOwner(diana);
hyundai.info();
