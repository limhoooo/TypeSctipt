interface Employee {
    pay(): void;

}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time');
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time`);
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 
// 정말 추상적인 타입으로 다시 리턴하는 함수는 안좋다
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// 일반 T 타입을 extends 로 확장할 수 있다.
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}


const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);


// obj 안의 key 를 이용해서 value 를 뽑아올때
const obj = {
    name: 'ellie',
    age: 20,
};

// keyof : obj 안에있는 key 의 타입
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));