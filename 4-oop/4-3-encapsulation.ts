{
    // 타입선언
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public
    // private : 클래스 밖에서는 접근이 안됨
    // protected : 상속받은 클래스에서는 접근 가능함
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOW: number = 7; // class level
        private coffeeBeans: number = 0;
        // 외부에서 접근 X
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        // 생성자 함수
        // 외부에서 class 를 사용하기위한 함수 
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }
        // 외부에서 coffeeBeans을 set 하는 함수
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than");
            }
            this.coffeeBeans = beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            // 보유한 커피콩 < 샷 * 커피를 만드는데에 필요한 양 
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOW) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOW;
            return {
                shots,
                hasMilk: false,
            }
        }
    }
    // 생성자
    const maker = CoffeeMaker.makeMachine(15);
    //maker.fillCoffeeBeans(5);
    console.log(maker.makeCoffee(2));


    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        };
        private internalAge = 4;
        get age(): number {
            return this.internalAge
        }
        set age(num: number) {
            this.internalAge = num
        }

        constructor(private firstName: string, private lastName: string) {

        }
    }
    const user = new User('Lim', 'ho')
    console.log(user.fullName);
    user.age = 2;

}